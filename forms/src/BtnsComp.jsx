import React from 'react'

const BtnsComp = ({uc}) => {
    const handleCount=(count)=>{
        if(count === 0){
            uc(0)
        }else{
            uc(prev=>prev + count)
        }
    }
  return (
    <div style={{backgroundColor:"lightblue",width:"30%",display:"flex",flexDirection:"column"}}>
        <button style={{width:"fit-content"}} onClick={()=>handleCount(10)}>+</button>
        <button style={{width:"fit-content"}} onClick={()=>handleCount(-10)}>-</button>
        <button style={{width:"fit-content"}} onClick={()=>handleCount(0)}>reset</button>
    </div>
  )
}

export default BtnsComp