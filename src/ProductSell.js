import React from 'react'
import Product from './Product'
import Pdata from './Pdata'

function ProductSell() {
return (
<>

<div className='product_sell_main' >
<div className='product_sell_wrap'>

<div className='product_sell_wrap_top '>
<div className='product_sell_wrap_top_left '>
<h5>ProductSell</h5>

</div>
<div className='product_sell_wrap_top_right'>
<div className='product_search'>
        <button type='submit' className='product_search_button'><i className="fa-solid fa-magnifying-glass"></i></button>
          <input type='search' placeholder='Search' className='search_input'/>
        </div>
<select name="year" id="selling_day">
<option value="days">Last 30 days</option>
<option value="days">Last 15 days</option>
<option value="days">Last 7 daysy</option>
</select>

</div>
</div>

<div className='product_sell_wrap_bottom'>
<div className='product_sell_wrap_bottom_left'>
<p>Product Name</p>
</div>
<div className='product_sell_wrap_bottom_right'>
<p className='desktop_price'><span>Stock</span><span>Price</span> <span>Total Sales</span></p>


</div>
</div>


{ Pdata.map((val,index)=>{
  console.log(index);

return(
<Product 
key={index}
imgsrc={val.imgs}
titles={val.title}
content={val.para}
stoc={val.stock}
pric={val.price}
sell={val.sales}


/>

)
}) 



}


</div>
</div>


</>
)
}

export default ProductSell