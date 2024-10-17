import React from 'react';
import Biodata from '../contents/Biodata';
import ChangePass from '../contents/ChangePass';
import SectionContainer from "../utils/SectionContainer";

const ProfileLayout: React.FC = () => {
  return (
    <div className="w-full">
      <SectionContainer fullWidth>
        <Biodata />
        <ChangePass />
      </SectionContainer>
    </div>
  );
};

export default ProfileLayout;