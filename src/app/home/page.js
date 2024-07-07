"use client";

import Image from 'next/image'
import HeadshotImage from '../../../public/1714499008926.jpeg'
import IntroductionItem from "@/components/introduction_item";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faArrowUpRightFromSquare, faStar, faCircle} from "@fortawesome/pro-solid-svg-icons";
import CustomerList from "@/components/customer_list";
import {useRef} from "react";
import {customers} from "@/data/customers";
import TechStackList from "@/components/techstack_list";
import {projects} from "@/data/projects";

export default function IndexPage() {
    const customerList = useRef(customers);
    const projectList = useRef(projects);
    return (
        <>
            <IntroductionItem title="Introduction">
                <div className="columns-2 pt-5">
                    <p className="px-10 text-justify">
                        As an innovative Senior Full Stack Developer and Technical Leader with over a decade of
                        experience
                        across healthcare, insurance, and logistics industries, I have consistently generated robust,
                        scalable
                        solutions that enhance user experience and operational efficiency. My expertise in modern
                        technologies
                        and frameworks, coupled with a mastery in database and cloud services, has led to high-quality,
                        zero
                        downtime deployments. With a strategic mindset, I excel at leading dynamic teams to surpass
                        project
                        goals while championing Agile and CI/CD best practices, passionately harnessing technology to
                        solve
                        critical business challenges and propel organizational growth.
                    </p>
                    <Image
                        src={HeadshotImage}
                        width="200"
                        height="200"
                        alt="Hung Truong, #OPEN_TO_WORK">
                    </Image>
                </div>
            </IntroductionItem>
            <div className="grid grid-cols-2">
                <IntroductionItem title="Soure Code Links">
                    <ul className="pt-5 px-10">
                        <span className="text-2xl"><FontAwesomeIcon icon={faGithub}/> Github</span>
                        <li>
                            <a href="https://github.com/hungtruongquoc/nextjs-landing" target="_blank">
                                This landing page was developed with NextJS, Tailwind CSS <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}/>
                            </a>
                            <p className="font-bold">
                                Tech Stack
                            </p>
                            <ul>
                                <li>Runtime: NodeJS</li>
                                <li>Frontend: NextJS, Tailwind CSS</li>
                            </ul>
                        </li>
                    </ul>
                </IntroductionItem>
                <IntroductionItem title="Honorable Projects">
                    <ul className="pt-5 px-10">
                        <li>
                            <a className="text-amber-400" href="https://beetrack.io/home-en/"
                               target="_blank">
                                <FontAwesomeIcon icon={faStar}/> Enterprise Level Asset Management
                                Platform <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}/>
                            </a>
                            <p className="font-bold">
                                Tech Stack
                            </p>
                            {
                                projectList.current[0].techStack.map((techStackItem, index) => (
                                    <TechStackList key={"techstack-0-" + index} title={techStackItem.title}
                                                   items={techStackItem.items}/>
                                ))
                            }
                            <p className="font-bold">
                                Customers
                            </p>
                            <CustomerList customers={customerList.current}/>
                        </li>
                        <li className="pt-5">
                            <a className="text-green-500"
                               href="https://app.takecommandhealth.com/sign-in?next=/member-portal">
                                <FontAwesomeIcon icon={faStar}/> Take Command Health Platform, Dalla, TX
                                USA <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}/>
                            </a>
                            <p className="font-bold">
                                Tech Stack
                            </p>
                            {
                                projectList.current[1].techStack.map((techStackItem, index) => (
                                    <TechStackList key={"techstack-1-" + index} title={techStackItem.title}
                                                   items={techStackItem.items}/>
                                ))
                            }
                        </li>
                    </ul>
                </IntroductionItem>
            </div>
        </>
    )
}
