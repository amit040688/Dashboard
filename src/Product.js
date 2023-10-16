import React from 'react'


function product(props) {
  return (
    <div className='product'>
    <div className='item'>
<img src={props.imgsrc} alt={props.imgsrc} className='product_img'/>
<div className='image_content'>
    <h5>{props.titles}</h5>
    <p>{props.content} </p>
</div>


    </div>
    <div className='rate'>
        <div className='rate_content'>
          <p className='resposive_price d-md-none' ><span>Stock</span><span>Price</span> <span>Total Sales</span></p>
            <p>{props.stoc}<strong className='Price_of_stock'>{props.pric}</strong>{props.sell}</p>
        </div>


    </div>
</div>
  )
}

export default product