import React from 'react'
import'./Container.css'

interface Icontaner{
    children : React.ReactNode
}

function Container({children}:Icontaner) {
  return (
    <div className='con-cost'>
      {children}
    </div>
  )
}

export default Container
