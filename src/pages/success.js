import Head from 'next/head'
import Link from 'next/link'

export default function Success() {
    return (
        <div>
            <Head>
                <title>Rental Apartment</title>
                <meta name='description' content='Rental Apartment Website' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <div className='relative overflow-hidden'>
                <div className='relative'>
                    <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gray-100'> </div>
                    <div className=''>
                        <div className='relative shadow-xl sm:overflow-hidden'>
                            <div className='absolute inset-0'>
                                <img className='h-full w-full object-cover' src='/img/1.jpg'/>
                                <div className='absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 mix-blend-multiply'></div>
                            </div>
                            <div className='relative px-4 py-16 sm:px-6 lg:py-32 lg:px-8 bg-gray-800/80'>
                                <h1 className='text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
                                    <span className='block text-white'>Successfully booked!</span>
                                </h1>
                                <h2 className='text-center text-2xl font-normal tracking-tight mt-10'>
                                    <span className='block text-gray-300'>
                                        You will receive an email with all the details
                                    </span>
                                </h2>
                                <div className='mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center'>
                                    <div className='space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5'>
                                        <Link legacyBehavior href={`/`}>
                                            <a className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-indigo-50 sm:px-8'>
                                               ⬅ Back to the house details
                                            </a>
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}