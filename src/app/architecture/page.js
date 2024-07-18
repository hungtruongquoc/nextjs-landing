import dynamic from "next/dynamic";

const D3Diagram = dynamic(() => import('../../components/architecture_chart'), {ssr: false});

export default function ArchitecturePage() {
    return (<div className="flex flex-col gap-5 py-5">
        <h1 className="text-2xl font-bold">The Architecture of Service Deployment on Railway</h1>
        <D3Diagram/>
    </div>)
}
