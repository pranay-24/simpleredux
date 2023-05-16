const initialState={
BatQty :100
}

const productReducer=(state=initialState,action)=>{

switch(action.type){
case 'makeOrder':
return {
...state,
BatQty:state.BatQty - 1
}

default: return state
}
}

export default productReducer