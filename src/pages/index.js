import React from "react"
import Layout from "../components/layout"
import Button from "../components/button"
import HeroSection from "../components/sections/hero"
import ServicesSection from "../components/sections/services"
import OurClientsSection from "../components/sections/clients"
import TechnologiesImage from "../components/svg/technologies"
import GradientBlob from "../components/svg/blob-gradient"
import AboutImage from "../images/about-section-image.jpg"
import ChatBoxSvg from "../components/svg/chatbox"
import Footer from "../components/footer"
import { RevealGlobalStyles, Reveal, Animation } from "react-genie"

const classes = {
  section: "w-full pt-16",
  title:
    "font-bold text-3xl md:text-5xl text-csdark mb-6",
  services: {
    title: "font-semibold text-gray-800 text-xl mb-2",
    lead: "font-medium mb-6 text-base",
    content: "font-regular text-base",
    wrapper:
      "w-full text-csdark flex flex-col justify-center bg-white p-4 rounded shadow-md hover:shadow-xl md:mb-8 lg:bg-transparent lg:shadow-none lg:p-8 mb-4",
  },
}

const IndexPage = () => (
  <Layout>
    <RevealGlobalStyles />
    <HeroSection />
    <ServicesSection />
    <OurClientsSection/>
    <section className="bg-white w-full -mt-64 pt-40 lg:pb-56 lg:pt-64">
      <div className="container mx-auto flex flex-col px-4 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <h2 className={`${classes.title}`}>About us</h2>
          <p className="font-medium mb-4">
            KLOC, is a vibrant software development company creating bespoke
            solutions, in the heart of Southern England
          </p>
          <p className="mb-4">
            We specialise in transforming business know-how into elegant
            software solutions, which help future-proof your business with
            systems it needs to thrive, and functionality your customers demand.
            With over 30 years’ experience in development, we have a proven
            track record of creating high-quality, cost-effective solutions and
            maintenance backed by expert support. We are the ideal and safe
            choice for businesses looking for bespoke, solution development.
          </p>
          <p className="font-medium mb-8">
            If you need a dependable partner that will go the extra mile to make
            sure you get the solution you need, please contact us to find out
            more about what makes us a better choice for your next project.
          </p>
          <p className="font-medium md:mb-8">
            Some of technologies we work with:
          </p>
          <div className="flex w-11/12 z-10 relative">
            <TechnologiesImage />
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative mt-10 lg:pl-20">
          <span className="w-1/3 -mt-16 hidden lg:inline-block absolute z-0">
            <GradientBlob />
          </span>
          <img
            src={AboutImage}
            alt=""
            className="w-full absolute top-0 hidden lg:inline-block"
          />
        </div>
      </div>
    </section>
    <section className={`${classes.section} relative -mt-4`}>
      <div className="container mx-auto px-4 pb-16 lg:pb-32">
        <h2 className={`${classes.title} text-left lg:text-center`}>
          Happy Clients
        </h2>
        <div>
          <div className="absolute z-0 right-0 top-0 -mt-16 mr-24 chat-box-svg">
            <ChatBoxSvg />
          </div>
          <span
            className="h-32 w-32 square-purple absolute z-0 hidden lg:inline-block"
            style={{ right: "25%", top: "25%" }}
          />
          <span
            className="h-20 w-20 square-purple absolute z-0 hidden lg:inline-block"
            style={{ right: "22%", top: "65%" }}
          />
          <span
            className="h-20 w-20 square-blue absolute z-0 hidden lg:inline-block"
            style={{ right: "40%", top: "85%" }}
          />
          <span
            className="h-32 w-32 square-blue absolute z-0 hidden lg:inline-block"
            style={{ left: "26%", top: "70%" }}
          />
          {/* customer review card*/}
          <div className="bg-white rounded-lg lg:rounded py-6 px-4 md:px-8 lg:py-8 lg:px-12 w-full lg:w-2/3 mx-auto lg:mt-16 z-10 relative text-center shadow-blue-lg">
            <Reveal animation={Animation.FadeIn}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-csblack mb-2">
                Lucy Sheehan
              </h2>
              <p
                className="text-gray-600 text-regular mb-4 lg:mb-6"
                style={{ fontSize: "14px" }}
              >
                Marketing Director
              </p>
              <p className="text-sm md:text-base text-csblack mb-6 lg:leading-relaxed text-left lg:text-center">
                We selected KLOC to build and run our Sport Relief Challenge
                website for their ability to handle the significant technical
                uncertainties of this project, while giving us the confidence
                that everything would be ready in time for Sport Relief 2016. We
                were not disappointed – KLOC Delivered, the project was a
                success and we continue to use KLOC to build integrated sites
                for the challenges that we run!
              </p>
              <p className="text-lg text-csblue font-semibold">
                Fitbit International
              </p>
            </Reveal>
          </div>
          {/* customer review card ends */}
        </div>
      </div>
    </section>
    <section className={`${classes.section} bg-white`}>
      <div className="container mx-auto px-4 pb-16 text-center">
        <h2 className={`${classes.title} mb-8`}>
          Let's talk about your project
        </h2>
        <Button variant="gradient" link="/" text="Enquire"></Button>
      </div>
    </section>
    <Footer />
  </Layout>
)

export default IndexPage
