'use client'

import React from 'react'

interface ResultsProps {
  suggestion: string
  className?: string;
}

export const Results: React.FC<ResultsProps> = ({suggestion, className}: ResultsProps) => {
  return (
    <div className="w-full bg-gray-100 flex justify-start items-center  p-8">
      {suggestion ? (
        <div className={className}>
          <small className='text-xs text-gray-400 pb-4 block'>MESSAGE ON JULY 22, 10:00</small>
          <div className='w-full'>
            {suggestion ? <p className='text-md text-gray-700'>{suggestion}</p> : 'You have not searched anything'}
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-400">Nothing is asked</div>
        )
      }
    </div>
  )
}
