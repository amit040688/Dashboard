import {BsArrowUp,BsArrowDown,BsCashCoin,BsFillHandbagFill,BsDatabase,BsFillFileTextFill} from  "react-icons/bs";
const CardData = [


{
    icon:<BsCashCoin className="earning"/>,
    title:"Earning",
    price:"$198k",
    priarrow:<BsArrowUp/>,
    per:'37.8% ',
    session:"this month"

},
{
    icon:<BsFillFileTextFill className="orders"/>,
    title:"Orders",
    price:"$2.4k",
    priarrow:<BsArrowDown style={{color:"red"}}/>,
    per:'2% ',
    session:"this month"

},
{
    icon:<BsDatabase className="balance"/>,
    title:"Balance",
    price:"$2.4k",
    priarrow:<BsArrowDown style={{color:"red"}}/>,
    per:'2% ',
    session:"this month"

},
{
    icon:<BsFillHandbagFill className="sales"/>,
    title:"Total Sales",
    price:"$89k",
    priarrow:<BsArrowDown/>,
    per:'11% ',
    session:"this week"

}

]

export default CardData;