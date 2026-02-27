import MortgageForm from "@/components/MortgageComponents/MortgageForm";

export const metadata = {
  title: "Mortgage Calculator - Medlock Realty",
  description: "Explore our latest mortgage calculator resources and guides.",
};

export default function page() {
  return (
    <div>
      <MortgageForm />
    </div>
  );
}
