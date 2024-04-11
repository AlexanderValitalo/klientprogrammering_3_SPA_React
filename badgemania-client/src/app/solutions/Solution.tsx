import { SolutionsList } from "./page";

interface SolutionProps {
  solutionText: SolutionsList;
}

export default function Solution({ solutionText }: SolutionProps) {
  return (
    <div className="flex flex-col items-center border bg-white rounded-2xl m-3">
      <h2 className="text-3xl font-semibold text-center bg-neutral-800/30 rounded-lg mt-3 max-w-2xl">
        {solutionText.header}
      </h2>
      <ul className="list-disc mx-7 text-2xl max-w-80">
        {solutionText.text.map((solText) => (
          <li key={solText}>{solText}</li>
        ))}
      </ul>
    </div>
  );
}
