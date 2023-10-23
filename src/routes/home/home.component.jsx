import { Square3Stack3DIcon, CurrencyPoundIcon, MinusIcon, ScaleIcon  } from '@heroicons/react/24/solid'
import { Fragment } from 'react';

const Home = () => {
    return (
        <Fragment>
            <div className="grid grid-cols-4 gap-4 my-8">
                <div className="rounded-lg flex flex-col items-center justify-center shadow hover:shadow-2xl shadow-lg">
                    <Square3Stack3DIcon className="h-16 w-16 text-blue-500" /> 
                    <p>Area</p>
                </div>
                <div className="rounded-lg flex flex-col items-center justify-center shadow hover:shadow-2xl shadow-lg">
                    <CurrencyPoundIcon className="h-16 w-16 text-blue-500" />
                    <p>Currency</p>
                </div>
                <div className="rounded-lg flex flex-col items-center justify-center shadow hover:shadow-2xl shadow-lg">
                    <MinusIcon className='h-16 w-16 text-blue-500' />
                    <p>Length</p>
                </div>
                <div className="rounded-lg flex flex-col items-center justify-center shadow hover:shadow-2xl shadow-lg">
                    <ScaleIcon className='h-16 w-16 text-blue-500' />
                    <p>Weight</p>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div className="rounded-lg flex flex-col items-center justify-center shadow hover:shadow-2xl shadow-lg">
                    <Square3Stack3DIcon className="h-16 w-16 text-blue-500" /> 
                    <p>Area</p>
                </div>
                <div className="rounded-lg flex flex-col items-center justify-center shadow hover:shadow-2xl shadow-lg">
                    <CurrencyPoundIcon className="h-16 w-16 text-blue-500" />
                    <p>Currency</p>
                </div>
                <div className="rounded-lg flex flex-col items-center justify-center shadow hover:shadow-2xl shadow-lg">
                    <MinusIcon className='h-16 w-16 text-blue-500' />
                    <p>Length</p>
                </div>
                <div className="rounded-lg flex flex-col items-center justify-center shadow hover:shadow-2xl shadow-lg">
                    <ScaleIcon className='h-16 w-16 text-blue-500' />
                    <p>Weight</p>
                </div>
            </div>     
        </Fragment>
        
    )
}

export default Home;