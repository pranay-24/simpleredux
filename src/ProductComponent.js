import React,{useState} from 'react'
import {makeOrder} from './actions'
import {connect} from 'react-redux'
const ProductComponent = (props) => {
const [batqty,setBatqty] = useState('')
  return (
    <div>
    <h2>bat qty : {props.BatQty}</h2>
<input type="text" placeholder="Enter qty to order" value={batqty} onChange={(e)=>setBatqty(e.target.value)}/>

    <button onClick={()=>props.makeOrder(batqty)} >Submit Order</button>
    </div>
  )
}
const mapStatetoprops=(state)=>{
return{
BatQty:state.BatQty
}
}
const mapDispatchtoprops=(dispatch)=>{
return {
makeOrder: (qty)=>{dispatch(makeOrder(qty))
// console.log('clicked')
}
}
}
export default connect (mapStatetoprops,mapDispatchtoprops)(ProductComponent)