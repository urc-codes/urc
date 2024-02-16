import { teamsprofiles } from "@/data/constant"

export const Teams = () => {
    
  return (
    <>
    <div className="bg-[#EEEDED] h-max w-full p-5">
        <p className="text-[#00375C] text-center font-semibold text-base md:text-xl">Our teams</p>
        <h1 className="text-[#00375C] font-black text-3xl text-center pt-2">What we do</h1>
        <div className="flex gap-5 flex-wrap md:flex-row w-full justify-center pt-10">
            {
                teamsprofiles.map((teamsprofile)=> (
            <div key={teamsprofile.id} className="p-2 w-64 text-[#00375C] text-center shadow-lg hover:bg-[#00375C] hover:text-white rounded-md flex flex-col items-center">
              <div className="p-3"><svg className="rep" width="80" height="80" viewBox="0 0 64 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={teamsprofile.svg_icon} />
            </svg></div>
            <div className="font-bold text-xl p-2">{teamsprofile.name}</div>
            <div className="p-2">{teamsprofile.description}</div>
            </div>
                ))
            }
            
        </div>
    </div>
    </>
  )
}
