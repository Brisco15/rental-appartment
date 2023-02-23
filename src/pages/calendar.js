import Head from 'next/head'
import Link from 'next/link'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { isDaySelectable } from 'lib/dates'
import { getCost } from 'lib/cost'

export default function Calendar() {
  return (
    <div>
      <Head>
        <title>Rental Apartment</title>
        <meta name='description' content='Rental Apartment Website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='relative overflow-hidden'>
        <div className='relative'>
          <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gray-100'></div>
          <div className=''>
            <div className='relative shadow-xl  sm:overflow-hidden'>
              <div className='absolute inset-0'>
                <img className='h-full w-full object-cover' src='/img/1.jpg' />
                <div className='absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 mix-blend-multiply'></div>
              </div>
              <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8  bg-gray-800/80'>
                <h1 className='text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
                  A Charming Old House
                  <span className='block text-gray-300'>
                    on the Italian Alps
                  </span>
                </h1>
                <div className='mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center'>
                  <div className='space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5'>
                    <Link legacyBehavior href={`/`}>
                      <a className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-blue-50 sm:px-8'>
                        ⬅ Back to the house details
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col mt-10'>
            <p className='text-2xl font-bold text-center my-10'>
                Availability and prices per night
            </p>

            <div className='pt-6 flex justify-center availability-calendar'>
                <DayPicker
                  components={{
                    DayContent: (props)=> (
                        <div 
                         className={`relative text-right ${
                            !isDaySelectable(props.date) && "text-gray-500"
                         }`}
                        >
                            <div>
                              {props.date.getDate()}
                            </div>
                            {isDaySelectable(props.date) && (
                                <div className='-mt-2'>
                                    <span
                                      className={`bg-white text-black rounded-md font-bold px-1 text-xs`} 
                                    >
                                        ${getCost(props.date)}
                                    </span>
                                </div>
                            )}
                        </div>
                    ),
                  }}
                />
            </div>
        </div>
      </div>
    </div>
  )
}