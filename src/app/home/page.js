import Image from 'next/image'
import HeadshotImage from '../../../public/1714499008926.jpeg'
import IntroductionItem from "@/components/introduction_item";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faArrowUpRightFromSquare, faStar} from "@fortawesome/pro-solid-svg-icons";
import CustomerList from "@/components/customer_list";
import TechStackList from "@/components/techstack_list";
import {getCustomerList} from "@/libs/customer";
import {getProjectList} from "@/libs/projects";

export default function IndexPage() {
    const customerList = getCustomerList();
    const projectList = getProjectList();

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
                    <div>
                        <Image
                            src={HeadshotImage}
                            width="200"
                            height="200"
                            alt="Hung Truong, #OPEN_TO_WORK">
                        </Image>
                        <ul>
                            <span className="font-bold text-2xl">Contact Info</span>
                            <li>
                                <span className="font-bold">Email: </span><span>hungtruongquoc@gmail.com</span>
                            </li>
                            <li>
                                <span className="font-bold">Mobile: </span><span>574-386-3696</span>
                            </li>
                            <li>
                                <span className="font-bold">LinkedIn: </span><a
                                href="https://www.linkedin.com/in/htruong83/" target="_blank">htruong83 <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </IntroductionItem>
            <div className="grid grid-cols-2">
                <IntroductionItem title="Soure Code Links">
                    <ul className="pt-5 px-10 flex-col flex-nowrap gap-5">
                        <span className="text-2xl my-5"><FontAwesomeIcon icon={faGithub}/> Github</span>
                        <li className="my-5">
                            <a className="font-black" href="https://github.com/hungtruongquoc/nextjs-landing"
                               target="_blank">
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
                        <li className="my-5">
                            <a className="font-black" href="https://github.com/hungtruongquoc/angular-asset-list"
                               target="_blank">
                                An Angular App showing list of assets <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}/>
                            </a>
                            <p>
                                <a href="https://angular.htruong83.com/" target="_blank">
                                    Demo application <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                                </a>
                            </p>
                            <p className="font-bold">
                                Tech Stack
                            </p>
                            <ul>
                                <li>Runtime: NodeJS</li>
                                <li>Frontend: Angular 18, Server Side Rendering, NgRx Store, RxJS, Ant Design</li>
                            </ul>
                        </li>
                        <li className="my-5">
                            <a className="font-black" href="https://github.com/hungtruongquoc/fast-api-demo"
                               target="_blank">
                                A FastAPI demo <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}/>
                            </a>
                            <p>
                                <a href="https://fast-api.htruong83.com/api/v1" target="_blank">
                                    Demo API v1 <FontAwesomeIcon icon={faArrowUpRightFromSquare}/> (Please contact me for API Key)
                                </a>
                            </p>
                            <p>
                                <a href="https://fast-api.htruong83.com/docs" target="_blank">
                                    OpenAPI Doc <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                                </a>
                            </p>
                            <p className="font-bold">
                                Tech Stack
                            </p>
                            <ul>
                                <li>Runtime: Python</li>
                                <li>Framework: FastAPI</li>
                                <li>Cloud service: FireBase, FireStore</li>
                            </ul>
                        </li>
                        <li className="my-5">
                            <a className="font-black" href="https://github.com/hungtruongquoc/react-amplify"
                               target="_blank">
                                A React Amplify demo <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}/>
                            </a>
                            <p>
                                <a href="https://react-amplify.htruong83.com/" target="_blank">
                                    Demo application <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                                </a>
                            </p>
                            <p className="font-bold">
                                Tech Stack
                            </p>
                            <ul>
                                <li>Runtime: Python, NodeJS</li>
                                <li>Framework: Django, ReactJS</li>
                                <li>Cloud service: Amplify</li>
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
                                projectList[0].techStack.map((techStackItem, index) => (
                                    <TechStackList key={"techstack-0-" + index} title={techStackItem.title}
                                                   items={techStackItem.items}/>
                                ))
                            }
                            <p className="font-bold">
                                Customers
                            </p>
                            <CustomerList customers={customerList}/>
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
                                projectList[1].techStack.map((techStackItem, index) => (
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
