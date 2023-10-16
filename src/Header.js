import React from 'react'
import {BsList} from  "react-icons/bs";
function Header({openSidebar}) {
  return (
    <header>
<div className='trigger' >
            <BsList onClick={openSidebar} />
            </div>
    <div className='row d-flex justify-content-between'>
      <div className='col-lg-9 col-md-12  col-sm-12'>
        <p className='header-title'>Hello Shahrukh <i className="fa-solid fa-hands-clapping"></i>,</p>
      </div>
      <div className='col-lg-3 col-md-12col-sm-12  '>

        <div className='header_search'>
          <button type='submit' className='search_button'><i className="fa-solid fa-magnifying-glass"></i></button>
          <input type='search' placeholder='Search' className='search_input' />
        </div>


      </div>

    </div>
  </header>
  )
}

export default Header