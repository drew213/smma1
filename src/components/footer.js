import { useMemo } from "react";

const Footer = ({ rectangleDivLeft }) => {
  const fOOTERStyle = useMemo(() => {
    return {
      left: rectangleDivLeft,
    };
  }, [rectangleDivLeft]);

  return (
    <section
      className="absolute top-[911px] left-[187px] w-[1034px] h-[100px] text-left text-xl text-black font-heading-preferred"
      style={fOOTERStyle}
    >
      <div className="absolute top-[0px] left-[0px] bg-white w-[1065px] h-[100px]" />
      <div className="absolute top-[77px] left-[calc(50%_-_143px)] leading-[114.29%]">
        COPYRIGHT @ DIGIMEDIA 2023
      </div>
      <div className="absolute top-[3px] left-[0px] w-[462px] h-[50px]">
        <div className="absolute top-[0px] left-[24px] w-[1014px] h-[50px]" />
        <a className="[text-decoration:none] absolute top-[2px] left-[24px] leading-[114.29%] text-[inherit] whitespace-pre-wrap flex items-center w-[69px] h-[50px]">{`T&C’s  `}</a>
        <a className="[text-decoration:none] absolute top-[15px] left-[90px] leading-[114.29%] text-[inherit] whitespace-pre-wrap">{` FAQ  `}</a>
        <a className="[text-decoration:none] absolute top-[15px] left-[144px] leading-[114.29%] text-[inherit] whitespace-pre-wrap">{` ABOUT US  `}</a>
        <a className="[text-decoration:none] absolute top-[15px] left-[263px] leading-[114.29%] text-[inherit] flex items-center w-[195px]">
          {" "}
          REQUEST A DEMO
        </a>
        <a
          className="[text-decoration:none] absolute top-[0px] left-[859px] w-[47px] h-[47px] bg-[url('/public/rectangle-30@3x.png')] bg-cover bg-no-repeat bg-[top]"
          href="tel:+447850600742"
        />
        <a className="[text-decoration:none] absolute top-[0px] left-[926px] w-[47px] h-[47px] bg-[url('/public/rectangle-31@3x.png')] bg-cover bg-no-repeat bg-[top]" />
        <a
          className="[text-decoration:none] absolute top-[0px] left-[993px] w-[47px] h-[47px] bg-[url('/public/rectangle-32@3x.png')] bg-cover bg-no-repeat bg-[top]"
          href="mailto:contactus@digimonmedia.com?subject=Request A Demo"
        />
      </div>
    </section>
  );
};

export default Footer;
