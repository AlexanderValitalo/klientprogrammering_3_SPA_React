import Navigation from "@/components/navigation/Navigation";
import Header from "@/components/header/Header";

// interface AboutList {
//   header: string;
//   text: string[];
// }

const ABOUTS: string[] = [
  "A vision to make learning more fun and engaging for students",
  "A vision to free time for teachers to focus on teaching",
];

export default function About() {
  return (
    <Navigation>
      <main className="flex flex-col items-center justify-between">
        <Header headerInfo="About Badgemania:" />

        <div className="flex flex-col font-martian text-black border-neutral-700 bg-neutral-800/30 rounded-2xl m-2 lg:flex-row">
          <div className="flex flex-col items-center border bg-slate-200 rounded-2xl m-3 p-2">
            <h2 className="text-3xl font-semibold text-center rounded-lg my-2">
              {"What is Badgemania?"}
            </h2>
            <p className="text-2xl font-semibold my-2">{}</p>
            <ul className="list-disc mx-7 text-xl">
              {ABOUTS.map((priceText) => (
                <li key={priceText}>{priceText}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </Navigation>
  );
}
