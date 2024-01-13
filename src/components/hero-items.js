import { Button, Icon } from "@mui/material";

const HeroItems = () => {
  return (
    <section className="absolute top-[91px] left-[188px] w-[1065px] h-[366px] text-left text-sm text-white font-heading-preferred">
      <div className="absolute top-[0px] left-[0px] bg-midnightblue w-[1065px] h-[382px]" />
      <div className="absolute top-[120px] left-[19px] w-[195px] h-14">
        <div className="absolute top-[81px] left-[6px] leading-[114.29%] whitespace-pre-wrap flex items-center w-[221px]">
          Reach your target audience in todays ever changing digital landscape
          by implementing the power of digital adspace, connected TV and web
          advertising.
        </div>
        <div className="absolute top-[0px] left-[0px] text-xl leading-[114.29%] flex items-center w-[235px] h-14">{`Digitise Your Advertising Strategies `}</div>
        <div className="absolute top-[202px] left-[6px] w-[140px] h-[30px]">
          <Button
            className="absolute top-[8px] left-[6px]"
            sx={{ width: 271 }}
            color="info"
            variant="contained"
            href="/request-a-demo"
            startIcon={<Icon>calendar_today_sharp</Icon>}
          >
            REQUEST A DEMO
          </Button>
        </div>
        <div className="absolute top-[-60px] left-[-45px] rounded-[50%] [background:linear-gradient(rgba(238,_238,_238,_0.2),_rgba(238,_238,_238,_0.2)),_linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_linear-gradient(rgba(255,_0,_0,_0.2),_rgba(255,_0,_0,_0.2)),_rgba(238,_238,_238,_0.2)] [filter:blur(150px)] w-[238px] h-[329px]" />
      </div>
      <img
        className="absolute top-[16px] right-[31px] w-[489px] h-[324px] object-cover"
        alt=""
        src="/hero-images@2x.png"
      />
    </section>
  );
};

export default HeroItems;
