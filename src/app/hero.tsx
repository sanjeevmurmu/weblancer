"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8" id="about">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Transform Your Digital Vision with Weblancer
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            At Weblancer, we turn innovative ideas into powerful digital solutions. 
            Our expert team crafts stunning websites and cutting-edge mobile applications 
            that help businesses thrive in the digital landscape. From concept to execution, 
            we're your trusted partner in digital excellence.
          </Typography>
          <div className="grid">
            <Typography
              variant="small"
              className="mb-2 text-gray-900 font-medium"
            >
              Get a Free Consultation
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <Input color="gray" label="Enter your email" size="lg" />
              <Button color="gray" className="w-full px-4 md:w-[12rem]">
                Get Started
              </Button>
            </div>
          </div>
          <Typography variant="small" className="font-normal !text-gray-500">
            Read our{" "}
            <a href="#" className="font-medium underline transition-colors">
              Terms and Conditions
            </a>
          </Typography>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/image-7.svg"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;