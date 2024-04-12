import Navigation from "@/components/navigation/Navigation";
import Header from "@/components/header/Header";

export default function About() {
  return (
    <Navigation>
      <main className="flex flex-col items-center justify-between">
        <Header headerInfo="About Badgemania:" />
      </main>
    </Navigation>
  );
}
