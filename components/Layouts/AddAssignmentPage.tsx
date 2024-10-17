// AssignmentPageLayout.tsx
import AssignmentSection from "../contents/AssignmentSection";
import SubmissionText from "../contents/SubmissionText";
import SectionContainer from "../utils/SectionContainer";
import SubmissionCard from "../ui/AddSubmissionCard";

const AssignmentPageLayout = () => {
    return (
        <div className="w-full">
            <SectionContainer fullWidth>
                <AssignmentSection />
                
                {/* SubmissionCard dengan konten (children) */}
                <SubmissionCard>
                   
                <SubmissionText />
                </SubmissionCard>
            </SectionContainer>
        </div>
    );
};

export default AssignmentPageLayout;
