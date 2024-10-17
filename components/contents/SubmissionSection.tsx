import React from 'react';
import SubmissionCard from '../ui/SubmissionCard';

const SubmissionSection: React.FC = () => {
    return (
        <section className="mt-8">
            <SubmissionCard
                status="No submissions have been made yet"
                timeRemaining="Assignment is overdue by: 2 years 337 days"
            />
        </section>
    );
};

export default SubmissionSection;



