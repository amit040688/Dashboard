import React from 'react'
import Barchart from './Barchart'
import ProductSell from './ProductSell';
import DoughnutChart from './DoughnutChart';
import Header from './Header'
import Card from './Card';
import CardData from './CardData';

function RightPanel({openSidebar}) {
return (

<div className='right_panel_main w-100'>

<div className='container '>

      <div className='head row'>
        <Header openSidebar={openSidebar}/>
      </div>
  <div className='card_main'>
    <div className='cards row w-100 m-auto'>
{CardData.map((value,ind) =>{
return(
<Card 
key={ind}
ico={value.icon}
titl={value.title}
pric={value.price}
pers={value.per}
priarr={value.priarrow}
sessi={value.session}


/>
)





}) }



    
    
    </div>
  </div>
  <div className='chart_main-wrap'>
    <div className='row chart-area m-auto' >
      <div className='col-lg-7 col-md-12 px-0'>
        <Barchart />
      </div>
      <div className='col-lg-5 col-md-12 px-0'>
      <DoughnutChart />
      </div>
    </div>
  </div>
  <ProductSell />

</div>
</div>

)
}

export default RightPanel