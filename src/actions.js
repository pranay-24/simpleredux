const MAKE_ORDER ='makeOrder'

export const makeOrder=(qty)=>{
return {
    type:MAKE_ORDER,
    payload:qty
}    
}