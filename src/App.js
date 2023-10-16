import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Sidebar from './Sidebar';
import RightPanel from './RightPanel';
import { useState } from 'react';


function App() {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const openSidebar = () =>{
    setOpenSidebarToggle(!openSidebarToggle)
  }

 
  
  return (
    <>
    <div className='container-fluid'>
<div className='row'>
<div className='main_left col-lg-2 col-md-12 col-sm-12  px-0'>
   <Sidebar openSidebarToggle={openSidebarToggle} openSidebar={openSidebar}/>
  
 </div>
 <div className='main_right col-lg-10 col-md-12 col-sm-12 '>
 <RightPanel openSidebar={openSidebar}/>
 </div>

</div>
  

</div>
    
    </>
  );
}

export default App;
