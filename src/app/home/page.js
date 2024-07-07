import Image from 'next/image'
import HeadshotImage from '../../../public/1714499008926.jpeg'
import IntroductionItem from "@/components/introduction_item";

export default function IndexPage() {
    return (
        <>
            <IntroductionItem title="Introduction">
                <div className="columns-2 pt-10">
                    <p>
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
            <IntroductionItem title="GitHub Links">

            </IntroductionItem>
        </>
    )
}
