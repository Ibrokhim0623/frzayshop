import React from 'react'
import { PacmanLoader } from 'react-spinners'

function Loader() {

    const loaderProps = {
        loading: true,
        size: 25,
        duration: 2,
        color: "#59AB6E"
    }

  return (
    <div className='loader'>
        <PacmanLoader {...loaderProps} />
    </div>
  )
}

export default Loader
