import AnnouncementCard from "../ui/AnnounceCard";
import StatusCard from "../ui/StatusCard";





export default function AnnouncementContent() {
  const announcements = [
    {
      title: "New Module Addition",
      date: "Monday, 1 November 2024",
      description: "New modules have been added for the material being worked on",
    },
  ];

  const statuses = [
    { status: "Completed", label: "BASIC LINUX & GITHUB" },
    { status: "On Progress", label: "WEB DEVELOPMENT" },
    { status: "Oncoming", label: "INTERNET OF THINGS" },
    { status: "Oncoming", label: "MACHINE LEARNING" },
  ];

  return (
    <div className="space-y-8 mb-10">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#BA2025] mb-2 lg:mb-4">
        Announcement
      </h2>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-black mb-3">
        Keep an eye on the announcements for the latest updates and information about Cyber Academy.
      </p>
      
      {announcements.map((announcement, index) => (
        <AnnouncementCard
          key={index}
          title={announcement.title}
          date={announcement.date}
          description={announcement.description}
        />
      ))}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {statuses.map((status, index) => (
          <StatusCard key={index} status={status.status} label={status.label} />
        ))}
      </div>
    </div>
  );
}
