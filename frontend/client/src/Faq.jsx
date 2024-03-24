import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export function Faq() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="mt-20 ml-2 mr-2 h-screen  bg-[url(https://res.cloudinary.com/dvgieawnp/image/upload/v1695194832/gavalllll_juq1d5.jpg)] bg-x-repeat	">
        <h1 class="mb-4 text-4xl font-extrabold justify-center flex leading-none tracking-tight text-gray-100 md:text-5xl lg:text-6xl pt-10">
          Frequently Asked Questions
        </h1>
        <div className=" rounded m-2 pt-12 p-10">
          <Accordion open={open === 1}>
            <AccordionHeader
              className="justify-center flex text-gray-300 hover:text-white"
              onClick={() => handleOpen(1)}
            >
              What types of occupation can an AI-powered predictor predict
              productivity?
            </AccordionHeader>
            <AccordionBody className="justify-center flex text-gray-100 text-lg">
              Currently it supprots formwork,brickwork and reinforcement
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2}>
            <AccordionHeader
              className="justify-center flex text-gray-300 hover:text-white"
              onClick={() => handleOpen(2)}
            >
              How accurate are the results?
            </AccordionHeader>
            <AccordionBody className="justify-center flex text-gray-100 text-lg">
              Our results are highly accurate for the various services that we
              provide as our model is trained on a large amount of data and
              makes use of specialized algorithms to predict the productivity
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3}>
            <AccordionHeader
              className="justify-center flex text-gray-300 hover:text-white"
              onClick={() => handleOpen(3)}
            >
              Is it safe to use an AI-powered productivity predictor?
            </AccordionHeader>
            <AccordionBody className="justify-center flex text-gray-100 text-lg">
              Yes.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </>
  );
}
export default Faq;
