'use client'
import React from 'react'

type FedRampHeader = {
  title: string
  description: string
}

const FedRampHead = ({ title, description }: FedRampHeader) => {
  return (
    <div className="text-center">
      <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 lg:mb-6">
        {title}
      </h2>
      <p>{description}</p>
    </div>
  )
}

export default FedRampHead
