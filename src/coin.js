import React from 'react'

const coin = () => {
  return (
    <div>
        <div className="coin_container">
            <div className="coin_row">
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    </div>                
            </div>
        </div>
    </div>
  )
}

export default coin