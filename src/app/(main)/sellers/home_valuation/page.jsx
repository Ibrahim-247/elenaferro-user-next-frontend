import ValuationForm from "@/components/HomeValuationComponent/ValuationForm";

export const metadata = {
  title: "Home Valuation - Medlock Realty",
  description: "Explore our latest home valuation resources and guides.",
};

export default function page() {
  return (
    <div>
      <ValuationForm />
    </div>
  );
}
