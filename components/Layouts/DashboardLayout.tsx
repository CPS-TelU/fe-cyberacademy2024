import DashboardHero from "../contents/DashboardHero";
import AnnouncementContent from "../contents/Announcement";
import AssignmentContent from "../contents/Assignment";
import SectionContainer from "../utils/SectionContainer";

export default function DashboardLayout() {
  return (
    <div className="space-y-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 mb-32">
        <DashboardHero />
        <AnnouncementContent />
        <AssignmentContent />
    </div>
  );
}
