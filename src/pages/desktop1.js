import { useCallback } from "react";
import {
  Button,
  IconButton,
  Input,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { Button as MuiButton, Icon } from "@mui/material";

const Desktop1 = () => {
  const onREQUESTClick = useCallback(() => {
    //TODO: call API google mail
  }, []);

  return (
    <div className="relative bg-midnightblue w-full h-[1024px] overflow-hidden">
      <div className="absolute top-[152px] left-[141px] w-[1116px] h-[706px] overflow-hidden">
        <form className="m-0 absolute top-[0px] left-[136px] bg-gainsboro w-[885px] h-[693px]">
          <Button
            className="absolute top-[578px] left-[348px] cursor-pointer"
            variant="outline"
            w="221px"
            colorScheme="teal"
            as="a"
            href="contactus@digimonmedia.com"
            onClick={onREQUESTClick}
          >
            REQUEST
          </Button>
          <Input
            className="bg-[transparent] absolute top-[193px] left-[0px] font-heading-preferred text-xl text-black"
            placeholder="PHONE No:"
            width="426px"
            w="426px"
          />
          <Input
            className="bg-[transparent] absolute top-[188px] left-[441px] font-heading-preferred text-xl text-black"
            placeholder="JOB TITLE:"
            width="426px"
            w="426px"
          />
          <Input
            className="bg-[transparent] absolute top-[119px] left-[0px] font-heading-preferred text-xl text-black"
            placeholder="EMAIL:"
            width="426px"
            w="426px"
          />
          <Input
            className="bg-[transparent] absolute top-[118px] left-[442px] font-heading-preferred text-xl text-black"
            placeholder="COMPANY NAME:"
            width="426px"
            w="426px"
          />
          <Input
            className="bg-[transparent] absolute top-[45px] left-[0px] font-heading-preferred text-xl text-black"
            placeholder="NAME :"
            width="426px"
            w="426px"
          />
          <div className="absolute top-[12px] left-[calc(50%_-_102.5px)] text-xl leading-[114.29%] font-heading-preferred text-black text-left">
            REQUEST A DEMO
          </div>
          <div className="absolute top-[-81px] left-[717px] rounded-[50%] [background:linear-gradient(rgba(238,_238,_238,_0.2),_rgba(238,_238,_238,_0.2)),_linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_linear-gradient(rgba(255,_0,_0,_0.2),_rgba(255,_0,_0,_0.2)),_rgba(238,_238,_238,_0.2)] [filter:blur(150px)] w-[238px] h-[329px]" />
          <Stack
            className="absolute top-[259px] left-[443px] font-heading-preferred text-xl text-black"
            w="425px"
          >
            <Select variant="outline" placeholder="COMPANY SIZE:">
              <option value="1-10">1-10</option>
              <option value="10-20">10-20</option>
              <option value="20-30">20-30</option>
              <option value="30-100">30-100</option>
            </Select>
          </Stack>
          <Input
            className="bg-[transparent] absolute top-[340px] left-[441px] font-heading-preferred text-xl text-black"
            placeholder="INDUSTRY:"
            width="425px"
            w="425px"
          />
          <Stack
            className="absolute top-[419px] left-[441px] font-heading-preferred text-xl text-black"
            w="426px"
          >
            <Select variant="outline" placeholder="LOCATION:">
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Australia">Australia</option>
              <option value="Europe">Europe</option>
              <option value="North merica">North merica</option>
              <option value="South America">South America</option>
            </Select>
          </Stack>
          <Stack
            className="absolute top-[486px] left-[443px] font-heading-preferred text-xl text-black"
            w="425px"
          >
            <Select variant="outline" placeholder="SERVICE OF INTEREST:">
              <option value="SOcial Media Management">
                SOcial Media Management
              </option>
              <option value="Influencer Marketing and Management">
                Influencer Marketing and Management
              </option>
              <option value="Paid Advertisement">Paid Advertisement</option>
              <option value="Analytics and Reporting">
                Analytics and Reporting
              </option>
              <option value="Website and Landing Page Optimisation">
                Website and Landing Page Optimisation
              </option>
              <option value="Others">Others</option>
            </Select>
          </Stack>
          <Textarea
            className="absolute top-[267px] left-[0px] font-heading-preferred text-xl text-black"
            variant="outline"
            w="425px"
            placeholder="COMMENTS:"
          />
          <Input
            className="absolute top-[358px] left-[0px]"
            variant="outline"
            width="426px"
            type="dateTime-local"
          />
        </form>
        <div className="absolute top-[377px] left-[878px] rounded-[50%] [background:linear-gradient(rgba(238,_238,_238,_0.2),_rgba(238,_238,_238,_0.2)),_linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_linear-gradient(rgba(255,_0,_0,_0.2),_rgba(255,_0,_0,_0.2)),_rgba(238,_238,_238,_0.2)] [filter:blur(165px)] w-[238px] h-[329px]" />
        <div className="absolute top-[172px] left-[0px] rounded-[50%] [background:linear-gradient(rgba(238,_238,_238,_0.2),_rgba(238,_238,_238,_0.2)),_linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_linear-gradient(rgba(255,_0,_0,_0.2),_rgba(255,_0,_0,_0.2)),_rgba(238,_238,_238,_0.2)] [filter:blur(150px)] w-[238px] h-[329px]" />
      </div>
      <section className="absolute top-[923px] left-[198px] w-[1059px] h-[97px] text-left text-xl text-black font-heading-preferred">
        <div className="absolute top-[0px] left-[-9px] bg-white w-[1065px] h-[100px]" />
        <div className="absolute top-[77px] left-[calc(50%_-_142.5px)] leading-[114.29%]">
          COPYRIGHT @ DIGIMEDIA 2023
        </div>
        <div className="absolute top-[3px] left-[0px] w-[462px] h-[50px]">
          <div className="absolute top-[0px] left-[24px] w-[1014px] h-[50px]" />
          <a className="[text-decoration:none] absolute top-[0px] left-[24px] leading-[114.29%] text-[inherit] whitespace-pre-wrap flex items-center w-[69px] h-[50px]">{`T&C’s  `}</a>
          <a className="[text-decoration:none] absolute top-[12px] left-[90px] leading-[114.29%] text-[inherit] whitespace-pre-wrap">{` FAQ  `}</a>
          <a className="[text-decoration:none] absolute top-[14px] left-[144px] leading-[114.29%] text-[inherit] whitespace-pre-wrap">{` ABOUT US  `}</a>
          <a className="[text-decoration:none] absolute top-[12px] left-[263px] leading-[114.29%] text-[inherit] flex items-center w-[195px]">
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
      <header className="absolute top-[0px] left-[187px] bg-white w-[1065px] h-[70px] text-center text-sm text-black font-roboto">
        <div className="absolute top-[25px] left-[calc(50%_-_166.5px)] leading-[114.29%] whitespace-pre-wrap">{`HOME      OUR SERVICES       PORTFOLIO     INSIGHTS       `}</div>
        <h1 className="m-0 absolute top-[12px] left-[10px] text-13xl leading-[114.29%] italic font-bold font-inherit">
          DIGIMEDIA
        </h1>
        <MuiButton
          className="absolute top-[14px] left-[943px] mix-blend-normal"
          sx={{ width: 107 }}
          color="success"
          name="LOGIN"
          variant="outlined"
        >
          LOGIN
        </MuiButton>
      </header>
    </div>
  );
};

export default Desktop1;
