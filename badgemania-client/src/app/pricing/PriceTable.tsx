import { PriceInfoList } from "./page";

interface PriceTableProps {
  priceInfoText: PriceInfoList;
}

export default function PriceTable({ priceInfoText }: PriceTableProps) {
  return (
    <div className="flex flex-col items-center border bg-slate-200 rounded-2xl m-3 p-2">
      <h2 className="text-3xl font-semibold text-center rounded-lg my-2">{priceInfoText.header}</h2>
      <ul className="list-disc mx-7 text-xl max-w-80">
        {priceInfoText.text.map((priceText) => (
          <li key={priceText}>{priceText}</li>
        ))}
      </ul>
    </div>
  );
}
