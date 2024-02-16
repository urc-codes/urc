import { executivesprofiles } from "@/data/constant"
import Image from "next/image"


export const Executives = () => {
  return (
    <div className="bg-white p-10 text-[#00375C] text-center w-full">
        <h1 className="text-2xl font-bold">Our Current Executives</h1>
        <div className="w-full flex flex-wrap md:flex-row gap-5 p-5 justify-evenly">
            {
                executivesprofiles.map((executivesprofile) => (
                    <div key={executivesprofile.id} className="rounded-lg shadow-lg w-52">
                        <Image src={executivesprofile.image} alt="exes_logo" />
                        <p className="p-2">{executivesprofile.fullname}</p>
                        <p className="font-bold mb-2 text-xs"><i>{executivesprofile.portfolio}</i></p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
