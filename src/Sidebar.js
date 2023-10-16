import React from 'react'
import {BsFillVinylFill,BsXLg,BsChevronDown, BsFillPatchQuestionFill, BsFillPatchMinusFill, BsFillPipFill, BsFillPersonFill, BsFillPSquareFill, BsKeyFill } from "react-icons/bs";
import img from './images/person_1.jpg.webp';

function Sidebar({openSidebarToggle,openSidebar}) { 
  return (
    <>
      <div id='sidebar' className={openSidebarToggle ? "sidebar-responsive" : ""}>
        <div className='side_inner'>
        <BsXLg className='close_icon' onClick={openSidebar}/>
          <div className='sidebar_top'>
       
            <h1 className='title'><BsFillVinylFill className='title_icon' /> Dashboard</h1>
            <a href="#" className='list_title'> <BsKeyFill className='list_title_icon' />Dashboard</a>
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <BsFillPSquareFill className='icon' />
                <a href='#' className="nav-link" >Product <i className="fa-solid fa-chevron-right"></i></a >

              </li>
              <li className="nav-item">
                <BsFillPersonFill className='icon' />
                <a href="#" className="nav-link" to="/">Customers <i className="fa-solid fa-chevron-right"></i></a>

              </li>
              <li className="nav-item">
                <BsFillPipFill className='icon' />
                <a href="#" className="nav-link" to="/">Income  <i className="fa-solid fa-chevron-right"></i></a>

              </li>
              <li className="nav-item">
                <BsFillPatchMinusFill className='icon' />
                <a href="#" className="nav-link" to="/">Promote <i className="fa-solid fa-chevron-right"></i></a>

              </li>
              <li className="nav-item">
                <BsFillPatchQuestionFill className='icon' />
                <a href="#" className="nav-link" to="/">Help <i className="fa-solid fa-chevron-right"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div className='sidebar_bottom'> 
            <a href='#'> <img src={img} alt="" className='p_image'/>
             <p><strong>Evano</strong><span>Project Manager</span>  </p>
             <BsChevronDown />
            </a>

          </div>
      </div>


    </>
  )
}

export default Sidebar