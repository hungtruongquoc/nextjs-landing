import Image from 'next/image'
import HeadshotImage from '../../../public/1714499008926.jpeg'
import IntroductionItem from "@/components/introduction_item";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faStar} from "@fortawesome/pro-solid-svg-icons/faStar";

export default function IndexPage() {
    return (
        <>
            <IntroductionItem title="Introduction">
                <div className="columns-2 pt-5">
                    <p className="px-10">
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
                            <a href="https://github.com/hungtruongquoc/nextjs-landing">
                                This landing page was developed with NextJS, Tailwind CSS
                            </a>
                        </li>
                    </ul>
                </IntroductionItem>
                <IntroductionItem title="Honorable Projects">
                    <ul className="pt-5 px-10">
                        <li>
                            <a className="text-amber-400" href="https://beetrack.io/home-en/">
                                Enterprise Level Asset Management Platform
                            </a>
                            <p>
                                Customers
                            </p>
                            <p className="pl-5"><a href="https://aeonmall.beetrack.vn/login">Aeon Mall Vietnam</a></p>
                            <p className="pl-5"><a href="https://movenpickpq-mik.beetrack.vn/login">MÖVENPICK RESORT WAVERLY PHU QUOC</a></p>
                        </li>
                        <li className="pt-5">
                            <a className="text-green-500" href="https://app.takecommandhealth.com/sign-in?next=/member-portal">
                                Take Command Health Platform
                            </a>
                        </li>
                    </ul>
                </IntroductionItem>
            </div>
        </>
    )
}
