import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import 'boxicons'       
import Products from '../Components/Products'
import { getMyWarrenty } from '../Web3Client'


const MyProducts = () => {

    const [count,setCount] = useState();
    const [state,setState] = useState();  
    const [arr,setArr] = useState([]);

        useEffect( ()=>{
            getMyWarrenty().then((res)=>{
                setState(res);
                setCount(res.length)
            }).catch(e=>console.log())
         },[])
     
     
         if(state){
             for (var i = 0; i <count; i++){
                 arr[count-i-1]={
                     index:count-i-1,
                     tokenId:state[i][0],
                     productId:state[i][1],
                     productName:state[i][2],
                     owner:state[i][3],
                     expiryDate:state[i][4]
                 }
             }
         }
         if(arr.length)
         console.log(arr); 


    return (
        <div className='gradient w-full h-full'>
            <Navbar />
            <div className='text-white font-bold font-Josefin text-2xl my-7 text-center md:text-4xl lg:text-5xl'>
            Your Product Details
                <div className='text-[#CECCD1] font-normal font-Josefin text-xs md:text-sm lg:text-base lg:py-3 text-center px-3'>From purchasing product to warranty support, trust can be achieved by transparently managing the records of every product purchase using blockchain technology. </div>
            </div>

            
                    <Products productName={"BOTTLE"} productId={"BTTL1234"} expiryDate={1688215137}/>
                    <Products productName={"TABLE"} productId={"TBL1234"} expiryDate={1688514137}/>
                    <Products productName={"CHAIR"} productId={"CHR1234"} expiryDate={1658218137}/>
                    <Products productName={"BED"} productId={"BED123"} expiryDate={1658228137}/>

            
            
 
        </div>
    )
}

export default MyProducts