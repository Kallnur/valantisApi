import React from 'react'
import { Circles } from 'react-loader-spinner'

const Loader = ({isActive}) => {
  return (
    <div className={`Loader ${isActive && 'Loader--active'}`}>
        <Circles
            height="180"
            width="180"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </div>
  )
}

export default Loader