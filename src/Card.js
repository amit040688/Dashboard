import React from 'react'

function Card(props) {
  return (
    <>
    <div className='card col-lg-3 col-md-5 col-sm-12 '>
            <div className='card_inner d-flex align-items-center w-100'>
              <div className='card_icon one'>
               {props.ico}
              </div>
              <div className='card_text'>
                <span>{props.titl}</span>
                <strong>{props.pric}</strong>
                <p><span className='earn'>{props.priarr}{props.pers} </span>{props.sessi}</p>
              </div>

            </div>
          </div>
    </>
  )
}

export default Card