const Section = (props) => {
    const { children } = props;

    return (
        <section>
            {children}
        </section>
    )
}

export const Interface = () => {
    return <>
        <div className="flex flex-col items-center w-screen">
            <IntroSection />
        </div>
    </>
}
const IntroSection = () => {
    return (
    <Section>
        <h1 className="text-6xl font-extrabold leading-snug">
            Welcome to the
            <br />
            <span className="bg-white px-1 italic">bakery</span>
        </h1>
    </Section>
    )
}