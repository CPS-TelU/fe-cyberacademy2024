import About from "../contents/About";
import HomeHero from "../contents/HomeHero";
import SectionContainer from "../utils/SectionContainer";
import Benefit from "../contents/Benefit";
import Requirements from "../contents/Requirements";
import Medpart from "../contents/Medpart";
import{ AppleCardsCarouselDemo } from "../contents/Knowlede-v2";
import Knowledge from "../contents/Knowledge";

const HomeLayout = () => {
  return (
    <div className="w-full">
      <SectionContainer fullWidth>
        <section id="home">
          <HomeHero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="benefit">
          <Benefit />
        </section>
        {/* <section id="course">
          <Knowledge />
        </section> */}
        <section id="course">
          <AppleCardsCarouselDemo/>
        </section>
        <section id="requirement">
          <Requirements />
        </section>
        <section id="medpart">
          <Medpart />
        </section>
      </SectionContainer>
    </div>
  );
};

export default HomeLayout;
