export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">welcome 🫶🏻</h1>
      <img className="mt-5 w-60 rounded-full mx-auto shadow-lg" src="./avatar.jpeg" />
      <div className="m-auto w-11/12 mt-10 md:w-5/12 tracking-wider">
        <p className="prose prose-neutral dark:prose-invert">
          Hi! Welcome to my website! I am a Data Engineer with a Bachelor's degree in Software Engineering. I am very passionate about crafting innovative iOS and Android applications to bring ideas to life.
        </p>
      </div>
    </section>
  );
}
