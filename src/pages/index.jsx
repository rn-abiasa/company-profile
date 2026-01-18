import { BadgeCheck } from "lucide-react";
import { UserProfile } from "../components/user";
import Navbar from "../components/navbar";
import Badge from "../components/badge";
import Button from "../components/button";
import SectionHeader from "../layouts/sectionHeader";
import Feature from "../components/feature";
import Review from "../components/review";
import Footer from "../layouts/footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="px-5 py-10 sm:px-16 md:px-26 lg:px-36 xl:px-48">
        <section className="md:flex md:justify-between md:items-center">
          <div className="">
            <Badge>Innovative Solutions for a Digital Future</Badge>
            <h1 className="text-4xl font-semibold mt-6">
              Technology by Strategy.<br></br>
              <span className="text-blue-600">
                Inovation by <br></br>Design.
              </span>
            </h1>
            <p className="text-sm font-normal text-black/50 mt-6 max-w-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex gap-5 mt-10">
              <Button variant="default">Start Your Project</Button>
              <Button variant="outline">Explore Services</Button>
            </div>
            <div className="flex items-center gap-5 mt-10">
              <div className="flex -space-x-3">
                <UserProfile
                  className=""
                  name="User"
                  image="/Cheerful Man Portrait.png"
                />
                <UserProfile
                  className=""
                  name="User"
                  image="/Smiling Man Portrait.png"
                />
                <UserProfile
                  className=""
                  name="User"
                  image="/Man on Phone Portrait.png"
                />
              </div>
              <p className="text-xs font-normal text-black/50">
                Trusted by startups and growing enterprises.
              </p>
            </div>
          </div>
          <img
            src="/Joyful Customer Support Representative.png"
            alt=""
            className="rounded-2xl mt-16 md:w-90 md:h-90 md:mt-0"
          />
        </section>
        <section className="mt-20">
          <SectionHeader
            alignment="center"
            className="justify-center items-center"
            title="Why Companies Choose Abiasa"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <div className="flex flex-col justify-center items-center gap-10 mt-16 md:flex-row">
            <Feature
              name="We Trusted"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor"
              icon={<BadgeCheck size={24} />}
            />
            <Feature
              name="We Trusted"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor"
              icon={<BadgeCheck size={24} />}
            />
            <Feature
              name="We Trusted"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor"
              icon={<BadgeCheck size={24} />}
            />
          </div>
        </section>
        <section className="mt-20">
          <SectionHeader
            alignment="start"
            className=""
            title="Where Strategy Meets Technology."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <div className="flex flex-col gap-10 md:flex-row md:mt-20">
            <img
              src="/Modern Corporate Meeting.png"
              alt=""
              className="rounded-2xl mt-16 md:w-90 md:h-90 md:mt-0"
            />
            <div className="max-w-96">
              <h className="text-3xl font-semibold text-blue-600">Strategy</h>
              <p className="text-sm font-normal text-black/50 mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit, lorem
                ipsum dolor sit amet consectetur adipisicing elit
              </p>
              <p className="text-sm font-normal text-black/50 mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit, lorem
                ipsum dolor sit amet consectetur adipisicing elit
              </p>
              <p className="text-sm font-normal text-black/50 mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit, lorem
                ipsum dolor sit amet consectetur adipisicing elit
              </p>
            </div>
          </div>
        </section>
        <section className="mt-20 mb-20">
          <SectionHeader
            alignment="center"
            className="justify-center items-center"
            title="What Our Clients Say"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <div className="flex flex-col gap-16 mt-16 md:flex-row">
            <Review
              name="Adam"
              prophecy="Startups Founder"
              image="/Cheerful Man Portrait.png"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            <Review
              name="Adam"
              prophecy="Startups Founder"
              image="/Cheerful Man Portrait.png"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            <Review
              name="Adam"
              prophecy="Startups Founder"
              image="/Cheerful Man Portrait.png"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
