import Image from 'next/image'
import HeadshotImage from '../../../public/1714499008926.jpeg'
import IntroductionItem from "@/components/introduction_item";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowUpRightFromSquare,
    faStar,
    faBook as faFileDoc,
    faBrowser,
    faMobile,
    faAt
} from "@fortawesome/pro-solid-svg-icons";
import CustomerList from "@/components/customer_list";
import TechStackList from "@/components/techstack_list";
import {getCustomerList} from "@/libs/customer";
import {getProjectList} from "@/libs/projects";
import Link from "next/link";
import {faGithubSquare, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export default function IndexPage() {
    const customerList = getCustomerList();
    const projectList = getProjectList();

    return (
        <>
            <IntroductionItem title="Introduction" id="introduction">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5">
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
                    <div className="flex flex-col items-center justify-center px-10">
                        <Image
                            src={HeadshotImage}
                            width="200"
                            height="200"
                            alt="Headshot of Hung Truong">
                        </Image>
                        <ul aria-labelledby="contact-info">
                            <span id="contact-info" className="font-bold text-2xl">Contact Info</span>
                            <li>
                                <span className="font-bold"><FontAwesomeIcon fixedWidth
                                                                             icon={faAt}/> </span>
                                <a href="mailto:hungtruongquoc@gmail.com">hungtruongquoc@gmail.com</a>
                            </li>
                            <li>
                                <span className="font-bold"><FontAwesomeIcon fixedWidth
                                                                             icon={faMobile}/> </span>
                                <a href="tel:574-386-3696">574-386-3696</a>
                            </li>
                            <li>
                                <span className="font-bold"><FontAwesomeIcon fixedWidth icon={faLinkedin}/> </span> <a
                                href="https://www.linkedin.com/in/htruong83/" target="_blank"
                                rel="noopener noreferrer">htruong83</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </IntroductionItem>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <IntroductionItem title="Soure Code Links" id="source-code">
                    <ul className="pt-5 px-10 flex-col flex-nowrap gap-5">
                        <li className="my-5">
                            <span className="font-bold">This landing page was developed with NextJS, Tailwind CSS</span>
                            <a className="font-black" href="https://github.com/hungtruongquoc/nextjs-landing"
                               target="_blank" rel="noopener noreferrer"
                               aria-label="NextJS Landing Page GitHub Repository">
                                <FontAwesomeIcon icon={faGithubSquare}/>
                            </a>
                            <p className="font-bold">
                                Tech Stack
                            </p>
                            <ul>
                                <li>Runtime: NodeJS</li>
                                <li>Frontend: NextJS, Tailwind CSS</li>
                                <li>Containerization: Docker, Railway</li>
                            </ul>
                        </li>
                        <li className="my-5">
                            <span className="font-bold">An Angular App showing list of assets</span> <a
                            className="font-black" href="https://github.com/hungtruongquoc/angular-asset-list"
                            target="_blank" rel="noopener noreferrer" aria-label="Angular Asset List GitHub Repository">
                            <FontAwesomeIcon
                                icon={faGithubSquare}/>
                        </a>
                            <p>
                                Demo application <a href="https://angular.htruong83.com/" target="_blank"
                                                    rel="noopener noreferrer" aria-label="Angular Asset List Demo">
                                <FontAwesomeIcon icon={faBrowser}/>
                            </a>
                            </p>
                            <p className="font-bold">
                                Tech Stack
                            </p>
                            <ul>
                                <li>Runtime: NodeJS</li>
                                <li>Frontend: Angular 18, Server Side Rendering, NgRx Store, RxJS, Ant Design</li>
                                <li>Containerization: Docker, Railway</li>
                            </ul>
                        </li>
                        <li className="my-5">
                            <span className="font-bold">A FastAPI demo</span> <a className="font-black"
                                                                                 href="https://github.com/hungtruongquoc/fast-api-demo"
                                                                                 target="_blank"
                                                                                 aria-label="FastAPI Demo GitHub Repository"
                                                                                 rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithubSquare}/>
                        </a>
                            <p>
                                Demo API v1 (Please contact me for API Key) <a
                                href="https://fast-api.htruong83.com/api/v1" target="_blank"
                                aria-label="FastAPI Demo API v1">
                                <FontAwesomeIcon icon={faBrowser}/>
                            </a>
                            </p>
                            <p>
                                OpenAPI Doc <a href="https://fast-api.htruong83.com/docs" target="_blank"
                                               aria-label="FastAPI Demo OpenAPI Documentation">
                                <FontAwesomeIcon icon={faBrowser}/>
                            </a>
                            </p>
                            <p className="font-bold">
                                Tech Stack
                            </p>
                            <ul>
                                <li>Runtime: Python</li>
                                <li>Framework: FastAPI</li>
                                <li>Cloud service: FireBase, FireStore</li>
                                <li>Containerization: Docker, Railway</li>
                            </ul>
                        </li>
                        <li className="my-5">
                            <span className="font-bold">Grooming Shop Demo</span> <a className="font-black"
                                                                                     href="https://github.com/hungtruongquoc/grooming-shop"
                                                                                     target="_blank"
                                                                                     aria-label="Grooming Shop Demo GitHub Repository"
                                                                                     rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithubSquare}/>
                        </a>
                            <p>
                                Shop Front End <a
                                href="https://grooming.htruong83.com/" target="_blank"
                                aria-label="Grooming Shop Front End">
                                <FontAwesomeIcon icon={faBrowser}/>
                            </a>
                            </p>
                            <p className="font-bold">
                                Tech Stack
                            </p>
                            <ul>
                                <li>Runtime: Python, TypeScript</li>
                                <li>Framework: FastAPI, Quasar (Vue3)</li>
                                <li>Headless CMS: Contentful</li>
                                <li>Containerization: Docker, Railway</li>
                            </ul>
                        </li>
                        <li className="my-5">
                            <h1 className="font-black">
                                A React Amplify, Django demo
                            </h1>
                            <p className="mx-5">
                                Demo front end application <a href="https://react-amplify.htruong83.com/"
                                                              aria-label="React Amplify Demo"
                                                              target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faBrowser}/>
                            </a> <a href="https://github.com/hungtruongquoc/react-amplify" target="_blank"
                                    rel="noopener noreferrer" aria-label="React Amplify GitHub Repository">
                                <FontAwesomeIcon icon={faGithubSquare}/>
                            </a>
                            </p>
                            <p className="mx-5">
                                Demo Django API Doc <a href="http://django-demo.htruong83.com/" target="_blank"
                                                       rel="noopener noreferrer" aria-label="Django API Documentation">
                                <FontAwesomeIcon icon={faBrowser}/>
                            </a> <a href="https://github.com/hungtruongquoc/django-ec2" target="_blank"
                                    aria-label="Django EC2 GitHub Repository">
                                <FontAwesomeIcon icon={faGithubSquare}/>
                            </a>
                            </p>
                            <p className="mx-5">
                                NodeJS Proxy for HTTP REST API <a href="https://django-api-proxy.htruong83.com/swagger/"
                                                                  aria-label="Django API Proxy Swagger"
                                                                  target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faBrowser}/>
                            </a> <a href="https://github.com/hungtruongquoc/express-passthrough-django-demo"
                                    aria-label="Express Passthrough Django Demo GitHub Repository"
                                    target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithubSquare}/>
                            </a>
                            </p>
                            <p className="font-bold">
                                <Link className="text-blue-950" href="/projects/1">
                                    Documentation <FontAwesomeIcon icon={faFileDoc}/>
                                </Link>
                            </p>

                            <p className="font-bold">
                                Tech Stack
                            </p>
                            <ul>
                                <li>Runtime: Python, NodeJS</li>
                                <li>Database: SQLite 3</li>
                                <li>Framework: Django (Django Rest Framework), ReactJS, ExpressJS</li>
                                <li>Cache: Redis</li>
                                <li>
                                    Cloud service: Amplify, Elastic Beanstalk, CodePipeline, CodeBuild, S3, CloudFront
                                </li>
                                <li>Containerization: Docker (docker compose), Railway</li>
                            </ul>
                        </li>
                    </ul>
                </IntroductionItem>
                <IntroductionItem title="Honorable Projects" id="projects">
                    <ul className="pt-5 px-10">
                        <li>
                            <a className="text-amber-400" href="https://beetrack.io/home-en/"
                               target="_blank" rel="noopener noreferrer">
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
                               href="https://app.takecommandhealth.com/sign-in?next=/member-portal"
                               rel="noopener noreferrer">
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
