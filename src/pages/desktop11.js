import { Button, Icon } from "@mui/material";
import Footer from "../components/footer";
import HeroItems from "../components/hero-items";
import HeaderCardForm from "../components/header-card-form";

const Desktop11 = () => {
  return (
    <div className="relative bg-midnightblue w-full h-[1024px] overflow-hidden">
      <Footer rectangleDivLeft="187px" />
      <section className="absolute top-[492px] left-[187px] w-[1065px] h-[390px] text-left text-xl text-black font-heading-preferred">
        <img
          className="absolute top-[0px] left-[0px] w-[1065px] h-[390px] object-cover"
          alt=""
          src="/rectangle-22@2x.png"
        />
        <div className="absolute top-[18px] left-[32px] leading-[114.29%]">
          WHY WORK WITH US?
        </div>
        <div className="absolute top-[82px] left-[26px] text-sm leading-[114.29%] flex items-center w-[854px] h-[270px]">
          <span className="w-full">
            <p className="m-0">
              Cutting-Edge Technology: Our use of AI technology ensures
              campaigns are not just effective but at the forefront of
              innovation.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Precision Targeting: With AI analysis, your ads reach the right
              audience segments at the right time, enhancing conversion rates.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Adaptability and Evolution: Our AI continuously evolves
              strategies, adapting to changing trends and audience behaviors.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Maximized ROI: The data-driven approach ensures every advertising
              dollar is maximized for optimal returns.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Innovation Meets Creativity: Our blend of AI analytics and human
              creativity results in impactful, memorable campaigns.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Customized Strategies: Each campaign is tailored to your specific
              goals and audience, ensuring a bespoke marketing approach.
            </p>
            <p className="m-0">{` `}</p>
          </span>
        </div>
        <div className="absolute top-[337px] left-[777px] w-[283px] h-[30px]">
          <Button
            className="absolute top-[8px] left-[6px]"
            color="info"
            variant="contained"
            href="/request-a-demo"
            startIcon={<Icon>calendar_today_sharp</Icon>}
          >
            REQUEST A DEMO
          </Button>
        </div>
      </section>
      <HeroItems />
      <HeaderCardForm propTop="17px" propLeft="188px" />
    </div>
  );
};

export default Desktop11;
