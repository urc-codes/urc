import { executivesprofiles } from "@/data/constant";
import Image from "next/image";
import React from "react";

export const AboutContent = () => {
  return (
    <div className="w-full p-5 bg-[#00375C] text-white rounded-lg">
      <h1 className="font-bold text-2xl mb-3">Who we are</h1>
      <p className="mb-10">
        UENR Robotics Club is a club formed by students of the University Of
        Energy and Natural Resources in 2019. The mission of the club is to
        develop student interest in science, technology, engineering and math
        (STEM) through robotics. UENR Robotics Club has some members with rare
        insights and expertise in the field of 3D design and printing, app and
        web development, hardware programming and PCB design which is necessary
        to develop robotics and internet of things (IoT) systems.
      </p>
      <h1 className="font-bold text-2xl mb-3">Leadership</h1>
      <div className="w-full flex flex-wrap md:flex-row gap-5 justify-center items-center">
            {
                executivesprofiles.map((executivesprofile) => (
                    <div className=" text-center" key={executivesprofile.id}>
                        <div className="avatar mb-4">
                            <div className="w-48 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
                                <Image src={executivesprofile.image} alt="exec" />
                            </div>
                        </div>
                        <p>{executivesprofile.fullname}</p>
                        <p>{executivesprofile.portfolio}</p>
                        <p>{executivesprofile.program}</p>
                        <p>Level: {executivesprofile.level}</p>
                    </div>    
                ))
            }
      </div>
    </div>
  );
};
