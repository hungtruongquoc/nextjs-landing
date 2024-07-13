import Image from 'next/image'

export default function ProjectPage() {
    return (
        <div className="flex flex-col gap-5 py-5">
            <h1 className="text-4xl font-black">Project Demo: React, Django, AWS</h1>
            <h2 className="text-2xl font-bold">Architecture</h2>
            <Image src="/DemoReactDjangoApp_Architecture (1).png" alt="Architecture of the project" width={900}
                   height={500}/>
            <h2 className="text-2xl font-bold">CI/CD</h2>
            <Image
                src="/DemoReactDjangoAWS_Deployment.png"
                width={900}
                height={500}
                alt="Picture of the author"
            />
        </div>
    );
}
