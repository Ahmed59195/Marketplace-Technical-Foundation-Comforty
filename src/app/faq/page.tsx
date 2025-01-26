import React from 'react'

const Page = () => {
  return (
    <div className='mb-20'>
        <div className="text-center">
          <h1 className='text-3xl font-bold py-10'>
            Questions Look Here
          </h1>
          <p className='text-lg px-4 sm:px-20'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard placeholder text for centuries.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:justify-between px-4 sm:px-20">
          {/* FAQ Item 1 */}
          <div className='mb-5 sm:mb-10 sm:w-1/3 bg-slate-200 p-5 rounded-lg'>
            <h2 className='font-bold mb-3 text-xl'>What types of chairs do you offer?</h2>
            <p className='text-gray-700'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className='mb-5 sm:mb-10 sm:w-1/3 bg-slate-200 p-5 rounded-lg'>
            <h2 className='font-bold mb-3 text-xl'>Do your chairs come with a warranty?</h2>
            <p className='text-gray-700'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div className='mb-5 sm:mb-10 sm:w-1/3 bg-slate-200 p-5 rounded-lg'>
            <h2 className='font-bold mb-3 text-xl'>Can I try a chair before purchasing?</h2>
            <p className='text-gray-700'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
            </p>
          </div>
        </div>
    </div>
  )
}

export default Page
