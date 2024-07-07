import Image from 'next/image'
import HeadshotImage from '../../../public/1714499008926.jpeg'
import IntroductionItem from "@/components/introduction_item";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faStar} from "@fortawesome/pro-solid-svg-icons/faStar";
import {faArrowUpRightFromSquare} from "@fortawesome/pro-solid-svg-icons";

export default function IndexPage() {
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
                        </li>
                    </ul>
                </IntroductionItem>
                <IntroductionItem title="Honorable Projects">
                    <ul className="pt-5 px-10">
                        <li>
                            <a className="text-amber-400" href="https://beetrack.io/home-en/"
                               target="_blank">
                                Enterprise Level Asset Management Platform <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}/>
                            </a>
                            <p>
                                Customers
                            </p>
                            <p className="pl-5">
                                <a href="https://aeonmall.beetrack.vn/login" target="_blank">
                                    <FontAwesomeIcon icon={faStar}/> Aeon Mall Vietnam <FontAwesomeIcon
                                    icon={faArrowUpRightFromSquare}/>
                                </a>
                            </p>
                            <p className="pl-5">
                                <a href="https://movenpickpq-mik.beetrack.vn/login" target="_blank">
                                    <FontAwesomeIcon icon={faStar}/> MÖVENPICK Resort Waverly Phu Quoc,
                                    Vietnam <FontAwesomeIcon
                                    icon={faArrowUpRightFromSquare}/>
                                </a>
                            </p>
                        </li>
                        <li className="pt-5">
                            <a className="text-green-500"
                               href="https://app.takecommandhealth.com/sign-in?next=/member-portal">
                                <FontAwesomeIcon icon={faStar}/> Take Command Health Platform, Dalla, TX
                                USA <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}/>
                            </a>
                        </li>
                    </ul>
                </IntroductionItem>
            </div>
        </>
    )
}
