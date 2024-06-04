import React from 'react'

const Select = () => {
    return (
        <div>
            <select name="cars" id="cars" className='w-[221px] h-[71px] text-lg font-normal px-[16px] py-[20px] border-2 '>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        </div>
    )
}

export default Select