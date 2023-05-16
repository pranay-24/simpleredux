const initialState={
BatQty:100,
BallQty:50
}

const productReducer=(state=initialState,action)=>{

switch(action.type){
case 'batOrder':
return {
...state,
BatQty:state.BatQty - action.payload
}

case 'ballOrder':
return {
...state,
BallQty:state.BallQty - action.payload
}

default: return state
}
}
export const batReducer=(state=initialState,action)=>{

switch(action.type){
case 'batOrder':
return {
...state,
BatQty:state.BatQty - action.payload
}

default: return state
}
}

export const ballReducer=(state=initialState,action)=>{

switch(action.type){
case 'ballOrder':
return {
...state,
BallQty:state.BallQty - action.payload
}

default: return state
}
}

// export default productReducer