import Image from "next/image";

export default function KnowledgePage() {
    return (
        <div className="flex flex-col gap-5 py-5">
            <h2 className="text-2xl font-bold">Data Analytics System with AWS</h2>
            <Image
                src="/DataAnalyticsInfrastructureWithAWS.png"
                alt="Data Analytics Infrastructure with AWS"
                width={900}
                height={500}
            />
        </div>
    );
}
