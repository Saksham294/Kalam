import React from 'react'
import './Card.css'
import { Typography } from '@mui/material'
import { Lato } from 'next/font/google'
import { Inter } from 'next/font/google'

const lato = Lato({
    subsets: ['latin-ext'],
    weight: ['400', '700'],
})

const inter = Inter({
    subsets: ['latin-ext'],
    weight: ['400', '700'],
})

const Card = ({heading,subHeading,img}) => {
    return (
        <div className='productContainer'>
                <div className="productImg">
                    <img src={img}></img>
                </div>
                <a>
                    <div className="productText">
                        <Typography variant='h5' className={inter.className}>{heading}</Typography>
                        <div className="productParaText">
                            <p>{subHeading}</p>
                        </div>

                    </div>
                </a>

            </div>
    )
}

export default Card
