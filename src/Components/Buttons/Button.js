import React from 'react'
import './Button.css'
import { NavLink } from 'react-router-dom'

const Button = ({ title, path }) => {
    return (
        <>
            <NavLink className='text-white' to={path}><button className='linkButton text-white fw-semibold linkSpace'>{title}</button></NavLink>
        </>
    )
}

export default Button