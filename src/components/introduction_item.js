export default function IntroductionItem({ title, children }) {
    return (
        <>
            <h1 className="text-6xl pt-20">{title}</h1>
            {children}
        </>
    )
}
