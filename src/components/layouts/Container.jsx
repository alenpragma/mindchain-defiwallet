import React, { children } from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-container mx-auto px-4 xl:px-0'>{children}</div>
  )
}

export default Container