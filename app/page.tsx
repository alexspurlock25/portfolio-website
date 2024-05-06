export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter text-center">welcome 🫶🏻</h1>
      <div className="md:flex items-center">
        <img className="w-60 rounded-full mx-auto shadow-lg" src="./avatar.jpeg" />
        <div className="mt-10 md:mt-0 ml-0 md:ml-10">
          <p className="prose prose-neutral dark:prose-invert text-center md:text-left">
            Hi! Welcome to my website! I am a Data Engineer with a Bachelor's degree in Software Engineering. I am very passionate about crafting innovative iOS and Android applications to bring ideas to life.
          </p>
        </div>
      </div>
    </section>
  );
}
