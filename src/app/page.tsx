import Exercises from "@/components/section/Exercises";
import Hero from "@/components/section/Hero";
import Programs from "@/components/section/Programs";


export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start md:container md:mx-auto">
      <Hero/>
      <Exercises/>
      <Programs/>
    </main>
  );
}
