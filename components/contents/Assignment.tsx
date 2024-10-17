import AssignmentCard from "../ui/AssignmentCard";

export default function AssignmentContent() {
  const assignments = [
    {
      deadline: "Saturday, 15 December 2024",
      title: "Assignment 1",
      description: "Basic Linux & GitHub Assignment",
      time: "23:59",
    },
  ];

  return (
    <div className="space-y-4 mb-32">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#BA2025] mb-4">
        Assignment
      </h2>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-black mb-3">
        Here are your assignments. Make sure to complete them on time!
      </p>
      {assignments.map((assignment, index) => (
        <AssignmentCard
          key={index}
          deadline={assignment.deadline}
          title={assignment.title}
          description={assignment.description}
          time={assignment.time} 
        />
      ))}
    </div>
  );
}