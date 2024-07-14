export default function IntroductionItem({ title, children, icon, id }) {
    return (
        <div>
            <h1 className="pt-10" id={id}>
                <div className="w-full text-center md:text-left">
                    <span>{icon ? icon : null}</span> <span className="text-4xl">{title}</span>
                </div>
            </h1>
            {children}
        </div>
    )
}
