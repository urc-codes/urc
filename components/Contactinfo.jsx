import React from 'react'

export const Contactinfo = () => {
  return (
    <div className='w-full p-5 bg-white text-[#00375C] flex flex-wrap md:flex-row gap-1'>
      <div className='flex-1 w-[50%]  flex flex-col justify-center p-5'>
      <h1 className='font-bold text-3xl'>Contact Us</h1>
      <div className="pt-3">
        <div className='p-2'>
        <p><b>LOCATION</b></p>
        <p>UENR, Sunyani - Bono Region, Ghana</p>
        </div>
        <hr/>
        <div className='p-2'>
        <p><b>PHONE</b></p>
        <p>+233 549300250</p>
        </div>
        <hr/>
        <div className='p-2'>
        <p><b>EMAIL</b></p>
        <p>uenrroboticsclub.innovate@gmail.com</p>
        </div>
      </div>
      </div>
      <div className='w-[100%] md:w-[50%]  p-5'>
      <div >
        <h2 className='text-2xl pb-5'><b>Let's talk about your Ideas</b></h2>
          <form action="" method="POST" >
            <div >
                    <div className='p-3 w-full'>
                    <input type="text" placeholder="Full Name" className="input input-bordered bg-white input-primary w-full max-w-xs" />
                    </div>
            </div>
           
                <div >
                <div className='p-3'>
                    <input type="email" placeholder="Email" className="input input-bordered bg-white input-primary w-full max-w-xs" />
                    </div>
                </div>
                <div>
                <div className='p-3'>
                    <input type="text" placeholder="Full Name" className="input input-bordered bg-white input-primary w-full max-w-xs" />
                    </div>
                </div>
      
            <div>
                <div>
                    <div className='p-3'>
                    <textarea className="textarea bg-white textarea-info" placeholder="Message"></textarea>
                    </div>
                </div>
            </div>
            <div  id="press">
                <div className='p-3'>
                    <button type="submit" name="submit" className='text-white bg-[#00375C] btn'>
                        Send Message 
                    </button>
                </div>
            </div>
        </form>
      </div>

      </div>
    </div>
  )
}
