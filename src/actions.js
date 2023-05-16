const BAT_ORDER ='batOrder'
const BALL_ORDER ='ballOrder'

export const batOrder=(qty)=>{
return {
    type:BAT_ORDER,
    payload:qty
}    
}
export const ballOrder=(qty)=>{
return {
    type:BALL_ORDER,
    payload:qty
}    
}
