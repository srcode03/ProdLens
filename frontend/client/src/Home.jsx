import React, { useContext } from "react";
import { useState } from "react";
import Footer from "./footer";
import Chatbot from "./chatbot";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { StepContext } from "./context/StepContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MobileNav, Typography, IconButton } from "@material-tailwind/react";

function Home() {
  const context = useContext(StepContext);
  const [openNav, setOpenNav] = React.useState(false);
  const [data, setData] = useState([]);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
    window.scrollTo(0, 0);

    context.setStep1(false);
    context.setStep2(false);
    context.setStep3(false);
    context.setStep4(false);

    fetch("http://127.0.0.1:5000/api/services")
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch");
        }
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setData(res);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log(data);
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Services
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="min-h-screen ">
      <div className="absolute inset-0 overflow-hidden h-full">
        <video
          autoPlay
          loop
          muted
          className="h-screen w-screen object-cover object-center fixed top-0 left-0 z-0"
          style={{ zIndex: -1 }}
        >
          <source
            src="https://res.cloudinary.com/dyxnmjtrg/video/upload/v1694668584/Purple_Blue_Modern_Tech_Business_Conference_Video_d5vf0l.mp4"
            type="video/mp4"
          />
          {/* You can add additional source elements for different video formats (e.g., WebM, Ogg) if needed */}
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="py-12 relative z-10">
        <Typography
          variant="h2"
          color="white"
          className="font-bold text-4xl font-serif text-center text-white mb-2 "
          style={{
            fontFamily:
              ' "DM Serif Display", "Open Sans", "PT Sans", sans-serif',
            marginTop: "90px",
          }}
        >
          Want to improve the productivity of our employees?
          <br></br>
          Use our productivity application today!!
        </Typography>
        <Typography
          color="white"
          className="font-normal text-center"
          style={{ fontFamily: '  "PT Sans", sans-serif' }}
        >
          This is your one stop destination to calculate the productivity of our
          workforce!
        </Typography>

        <div className="md:max-w-3xl mx-auto mt-14 -mb-7 px-3">
          <Typography
            color="white"
            className="font-light text-center md:text-xl text-base"
            style={{ fontFamily: '  "PT Sans", sans-serif' }}
          >
            <br />
            Not sure how to use our platform to find the productivity of your
            workforce?
            <br></br>
            Ask our AI powered Chatbot!!
          </Typography>
        </div>

        <Typography
          variant="h2"
          color="white"
          className="font-bold text-4xl font-serif text-center text-white -mb-14 "
          style={{
            fontFamily:
              ' "DM Serif Display", "Open Sans", "PT Sans", sans-serif',
            marginTop: "90px",
          }}
        >
          Available Services:
          <section className="text-black w-full">
            <div className="container lg:px-16 md:px-9 px-5 py-24 mx-auto w-full">
              <div className="flex flex-wrap -m-4 w-full">
                <Link
                  to={`/service`}
                  className="p-4 md:w-1/3 cursor-pointer transform transition ease-in-out hover:scale-90 duration-500"
                >
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      src={require("./images/download.jpeg")}
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      alt="blog"
                    />
                    <div className="bg-[#E6E6FA] h-full">
                      <div className="p-6">
                        <h1 className=" text-lg font-bold text-black mb-3 text-center">
                          Formwork
                        </h1>
                        <div className="flex justify-center mb-3 ">
                          <p className="text-lg font-normal text-black text-justify">
                            Efficient formwork lays the groundwork for
                            productivity. Find advanced formwork solutions to
                            optimize workflows and streamline concrete
                            construction processes. by calculating their
                            productivity today itself
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  to={`/service`}
                  className="p-4 md:w-1/3 cursor-pointer transform transition ease-in-out hover:scale-90 duration-500"
                >
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      src={require("./images/brickwork.jpg")}
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      alt="blog"
                    />
                    <div className="bg-[#E6E6FA] h-full">
                      <div className="p-6">
                        <h1 className=" text-lg font-bold text-black mb-3 text-center">
                          Brickwork
                        </h1>
                        <div className="flex justify-center mb-3 ">
                          <p className="text-lg font-normal text-black text-justify">
                            Boost productivity with precision brickwork.Make Our
                            skilled team today to ensure accurate bricklaying
                            techniques for durable structures, enhancing overall
                            project efficiency.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  to={`/service`}
                  className="p-4 md:w-1/3 cursor-pointer transform transition ease-in-out hover:scale-90 duration-500"
                >
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      src={require("./images/download.jpeg")}
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      alt="blog"
                    />
                    <div className="bg-[#E6E6FA] h-full">
                      <div className="p-6">
                        <h1 className=" text-lg font-bold text-black mb-3 text-center">
                          Reinforcement
                        </h1>
                        <div className="flex justify-center mb-3 ">
                          <p className="text-lg font-normal text-black text-justify">
                            Reinforcement plays a vital role in productivity and
                            safety. Discover your reinforcement services that
                            prioritize strength, compliance, and efficient
                            construction practices by calculating the
                            productivity of the workforce today.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                {/* Other Link components */}
              </div>
            </div>
          </section>
        </Typography>
      </div>
    </div>
  );
}

export default Home;
