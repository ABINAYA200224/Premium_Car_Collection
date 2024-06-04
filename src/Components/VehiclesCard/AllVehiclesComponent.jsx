import React from 'react'
import VehiclesCard from './VehiclesCard'

const AllVehiclesComponent = () => {
    return (
        <div className='flex flex-col gap-[50px]'>
            <div>
                <p className='text-xl font-bold text-[#7BBF3F] ml-[14.5rem]'>RECENT LAUNCHED CAR</p>
                <div className='font-black text-[48px] ml-[14.5rem]'>
                    Explore All Vehicles
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-[100px]'>
                <div className='flex gap-[100px]'>
                    <VehiclesCard />
                    <VehiclesCard />
                    <VehiclesCard />
                </div>

                <div className='flex gap-[100px]'>
                    <VehiclesCard />
                    <VehiclesCard />
                    <VehiclesCard />
                </div>

            </div>

        </div>
    )
}

export default AllVehiclesComponent
