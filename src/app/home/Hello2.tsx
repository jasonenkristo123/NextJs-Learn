


export default function Hello2({ isTrue }: { isTrue: boolean }) {
  return (
    <section>
        <h1 className="text-4xl">
          {isTrue ? "Hello welek" : "Farrel nggilani jelek pol"}
        </h1>
    </section>
  );
}
