import Navigation from "@/components/navigation/Navigation";
import Header from "@/components/header/Header";
import PriceTable from "./PriceTable";

export interface PriceInfoList {
  header: string;
  text: string[];
}

const PRICEINFO: PriceInfoList[] = [
  {
    header: "Small package",
    text: ["1 school admin", "1 teacher", "20 students per badgegroup", "10 badges per badgegroup"],
  },
  {
    header: "Medium package",
    text: [
      "1 school admin",
      "5 teachers",
      "30 students per badgegroup",
      "20 badges per badgegroup",
    ],
  },
  {
    header: "Large package",
    text: [
      "1 school admin",
      "20 teachers",
      "40 students per badgegroup",
      "50 badges per badgegroup",
    ],
  },
  {
    header: "Super package",
    text: [
      "1 school admin",
      "200 teachers",
      "40 students per badgegroup",
      "unlimited badges per badgegroup",
    ],
  },
];

export default function Pricing() {
  return (
    <Navigation>
      <main className="flex flex-col items-center justify-between">
        <Header headerInfo="Badgemania prices:" />

        <div className="flex flex-col font-martian text-black border-neutral-700 bg-neutral-800/30 rounded-2xl lg:flex-row">
          {PRICEINFO.map((priceInfo) => (
            <PriceTable key={priceInfo.header} priceInfoText={priceInfo} />
          ))}
        </div>
      </main>
    </Navigation>
  );
}
