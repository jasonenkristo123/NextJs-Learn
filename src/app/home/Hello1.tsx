

export default function Hello1({ isTrue }: { isTrue: boolean }) {
    
    return (
        <section>
            <h1 className="text-4xl">
                {isTrue ? "Hello True" : "Hello False"}
            </h1>
        </section>
    )
}