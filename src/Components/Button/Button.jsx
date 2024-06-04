import React from 'react'

const Button = ({ Btn_name, btnclassname, btnparentName }) => {
    return (
        <div className={btnparentName}>
            <button className={btnclassname}>{Btn_name}</button>
        </div>
    )
}

export default Button

