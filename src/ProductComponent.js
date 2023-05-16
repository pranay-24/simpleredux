import React,{useState} from 'react'
import {batOrder,ballOrder} from './actions'

import {connect} from 'react-redux'
const ProductComponent = (props) => {
const [batqty,setBatqty] = useState('')
const [ballqty,setBallqty] = useState('')
  return (
    <div>
    <h2>bat qty : {props.BatQty}</h2>
<input type="text" placeholder="Enter qty to order" value={batqty} onChange={(e)=>setBatqty(e.target.value)}/>

    <button onClick={()=>props.batOrder(batqty)} >Buy Bat</button>

    <h2>ball qty : {props.BallQty}</h2>
<input type="text" placeholder="Enter qty to order" value={ballqty} onChange={(e)=>setBallqty(e.target.value)}/>

    <button onClick={()=>props.ballOrder(ballqty)} >Buy Ball</button>

    </div>
  )
}
const mapStatetoprops=(state)=>{
return{
BatQty:state.bat.BatQty,
BallQty:state.ball.BallQty
}
}
const mapDispatchtoprops=(dispatch)=>{
return {

batOrder: (batqty)=>dispatch(batOrder(batqty)),
ballOrder: (ballqty)=>{dispatch(ballOrder(ballqty))   
// console.log('clicked')

}
}
}
export default connect (mapStatetoprops,mapDispatchtoprops)(ProductComponent)