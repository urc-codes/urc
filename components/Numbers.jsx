import { numbersofclubs } from "@/data/constant"


export const Numbers = () => {
  return (
    <div className="w-full pt-10 pb-10 text-center bg-[#00375C] flex flex-wrap md:flex-row justify-evenly items-center">
        {
            numbersofclubs.map((numbersofclub) => (
                <div className="p-5" key={numbersofclub.id}>
                    <h1 className="text-6xl font-black mb-1">{numbersofclub.totalNumbers}</h1>
                    <p className="uppercase font-bold text-xs">{numbersofclub.name}</p>
                </div>
            ))
        }
    </div>
  )
}
