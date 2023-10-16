import React,{useEffect,useRef} from 'react'
import  Chart  from 'chart.js/auto'

function DoughnutChart() {
 const  chartRef = useRef(null);
 const  chartInstance = useRef(null);

 useEffect(() =>{
     if(chartInstance.current){
        chartInstance.current.destroy();
     }
const myChartRef = chartRef.current.getContext("2d");
chartInstance.current = new Chart(myChartRef,{
    type: 'doughnut',
    data: {
       
          datasets:[{
           data:[30,65,50],
           backgroundColor: [
            'rgb(245, 60, 154)',
            'rgb(89 51 234)',
            'rgb(255, 255, 255)'
          ],

          }]
         
    }
});
return() =>{
    if(chartInstance.current){
        chartInstance.current.destroy();
    }
}

 },[])

  return (
    <div className='piechart_main 'style={{backgroundColor:"#fff",borderRadius:"5px"}}>

<div className='pie_top'>
<h5>Customers</h5><p>Customer that buy product</p>
</div>
<div className='pie_bottom text-md-center text-lg-center m-auto'>
<canvas  ref={chartRef} style={{width:"200px", height:"200px"}}/>
</div>
    
    </div>
  )
}

export default DoughnutChart