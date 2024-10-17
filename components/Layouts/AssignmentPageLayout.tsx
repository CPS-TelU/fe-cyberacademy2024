import AssignmentSection from "../contents/AssignmentSection";
import SubmissionSection from "../contents/SubmissionSection";
import SectionContainer from "../utils/SectionContainer";

const AssignmentPageLayout = () => {
    return (
        <div className="w-full">
            <SectionContainer fullWidth>
                <AssignmentSection />
                <SubmissionSection />
            </SectionContainer>
        </div>
    );
};

export default AssignmentPageLayout;
