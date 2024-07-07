export default function IntroductionItem({ title, children, icon }) {
    return (
        <>
            <h1 className="pt-10">
                <span>{icon ? icon : null}</span>
                <span className="text-4xl">{title}</span>
            </h1>
            {children}
        </>
    )
}
