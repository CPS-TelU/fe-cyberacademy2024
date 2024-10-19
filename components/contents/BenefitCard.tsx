import FlipCard from "@/components/ui/FlipCard";

export function BenefitCard() {
  const FlipDataBenefit = [
    {
      title: "TAK",
      description: "Time and Attendance",
      image: "/kartuIjo.png",
      rotate: "y" as const,
    },
    {
      title: "E-CERTIFICATE",
      description: "Time and Attendance",
      image: "/kartu.png",
      rotate: "y" as const,
    },
    {
      title: "INSIGHT ON CPS",
      description: "Time and Attendance",
      image: "/kartuIjo.png",
      rotate: "y" as const,
    },
    {
      title: "DEVELOPMENT TOOLS",
      description: "Time and Attendance",
      image: "/kartu.png",
      rotate: "y" as const,
    },
  ];
  
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-30 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 justify-items-center mx-auto">
        {FlipDataBenefit.map((card, index) => (
          <FlipCard
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            rotate={card.rotate}
            className="mt-8"
          />
        ))}
      </div>
    </div>
  );
  
}
