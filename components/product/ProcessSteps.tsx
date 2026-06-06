import Card from "@/components/ui/Card";

export default function ProcessSteps({ steps }: { steps: string[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-5">
      {steps.map((step, index) => (
        <Card key={step}>
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold font-bold text-black">
            {index + 1}
          </div>
          <p className="font-semibold">{step}</p>
        </Card>
      ))}
    </div>
  );
}
