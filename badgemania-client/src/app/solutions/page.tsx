import Navigation from "@/components/navigation/Navigation";
import Image from "next/image";
import Solution from "./Solution";

export interface SolutionsList {
  header: string;
  text: string[];
}

const SOLUTIONS: SolutionsList[] = [
  {
    header: "Student",
    text: [
      "The student does tasks, created by the teacher",
      "The student gets digital badges for the completed tasks",
      "The student feels more motivated to do more tasks",
    ],
  },
  {
    header: "Teacher",
    text: [
      "The teacher can administrate badgegroups",
      "The teacher can administrate students to the badgegroups",
      "The teacher can make badges for students to collect by doing the specific task",
      "The teacher can administrate badges to students",
    ],
  },
  {
    header: "School Admin",
    text: [
      "The school admin can administrate students in badgemania",
      "The school admin can administrate teachers in badgemania",
    ],
  },
];

export default function Solutions() {
  return (
    <Navigation>
      <main className="flex flex-col items-center justify-between">
        <div className="flex flex-col items-center sm:flex-row">
          <Image
            className="drop-shadow-[0_0_0.3rem_#ffffff70] invert"
            src="/logo_transparent.png"
            alt="Badgemania Logo"
            width={200}
            height={37}
          />
          <h1 className="text-3xl font-bold text-center m-3 font-martian p-4 border-neutral-700 bg-neutral-800/30 rounded-lg sm:text-5xl">
            Badgemania solutions for different roles!
          </h1>
        </div>
        <div className="flex flex-col font-martian text-black border-neutral-700 bg-neutral-800/30 rounded-2xl sm:flex-row">
          {SOLUTIONS.map((solution) => (
            <Solution key={solution.header} solutionText={solution} />
          ))}
        </div>
      </main>
    </Navigation>
  );
}
