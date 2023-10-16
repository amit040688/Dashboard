import React from 'react'
import {BarChart,XAxis,YAxis,Bar, Tooltip, ResponsiveContainer} from 'recharts';

function Barchart() {
const data = [
{name:'Jan',value:60},
{name:'Fab',value:50},
{name:'Mar',value:95},
{name:'Apr',value:75},
{name:'May',value:80},
{name:'Jun',value:40},
{name:'Jul',value:90},
{name:'Aug',value:110},
{name:'Sep',value:96},
{name:'Oct',value:78},
{name:'Nov',value:75},
{name:'Dec',value:65}

]


return (
<>
<div className='chart'>
   
    <div className='barchart_main 'style={{backgroundColor:"#fff",borderRadius:"5px"}}>
<div className='top_area'>
<div className='top_area_left'>
    <h5>Overview</h5>
    <p>Monthly Earning</p>
</div>
<div className='top_area_right'>


<select name="year" id="session">
  <option value="quarterly">Quarterly</option>
  <option value="yearly">Yearly</option>
  <option value="monthly">Monthly</option>
</select>
</div>


</div>

<div className='barchart_wrap' >
<ResponsiveContainer width="100%" aspect={1.9}>
    <BarChart width={600} height={100} data={data}>
        <Tooltip />
    <XAxis dataKey= "name" />
    <YAxis dataKey="value"/>
    <Bar dataKey="value" fill='#5f27cd'/>
</BarChart> 
</ResponsiveContainer>
</div>






</div>
</div>


</>
)
}

export default Barchart