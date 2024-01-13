import { useMemo } from "react";
import { Button, Icon } from "@mui/material";

const HeaderCardForm = ({ propTop, propLeft }) => {
  const hEADERStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <header
      className="absolute top-[17px] left-[188px] bg-white w-[1065px] h-[70px] text-center text-sm text-black font-roboto"
      style={hEADERStyle}
    >
      <div className="absolute top-[25px] left-[calc(50%_-_166.5px)] leading-[114.29%] whitespace-pre-wrap">{`HOME      OUR SERVICES       PORTFOLIO     INSIGHTS       `}</div>
      <h1 className="m-0 absolute top-[12px] left-[10px] text-13xl leading-[114.29%] italic font-bold font-inherit">
        DIGIMEDIA
      </h1>
      <Button
        className="absolute top-[14px] left-[943px] mix-blend-normal"
        sx={{ width: 107 }}
        color="success"
        name="LOGIN"
        variant="outlined"
      >
        LOGIN
      </Button>
    </header>
  );
};

export default HeaderCardForm;
