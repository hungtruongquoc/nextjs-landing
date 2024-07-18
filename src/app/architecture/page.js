import dynamic from "next/dynamic";

const D3Diagram = dynamic(() => import('../../components/architecture_chart'), {ssr: false});

export default function ArchitecturePage() {
    return (<div className="flex flex-col gap-5 py-5">
        <h1 className="text-2xl font-bold">D3 Sequence Diagram in Next.js</h1>
        <D3Diagram/>
    </div>)
}
