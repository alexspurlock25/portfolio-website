export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my portfolio</h1>
      <img className="mt-5 w-60 rounded-full mx-auto shadow-lg" src="./avatar.jpeg" />
      <div className="m-auto w-11/12 mt-10 md:w-5/12 tracking-wider">
        <p className="prose prose-neutral dark:prose-invert">
          Full time Data Engineer and BS in Software Engineering grad. I love making iOS apps and Android apps to bring my ideas to life.
        </p>
      </div>
    </section>
  );
}
