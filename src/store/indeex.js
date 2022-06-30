
import {configureStore} from '@reduxjs/toolkit'

import counterReducer from './counter-slice'
import authReducer from './auth';





/*
const countReducer=(state=initialState,action)=>{

    if(action.type==='increment'){
        
        return {
            counter:state.counter+1,
            value:'nac',
            showCounter:state.showCounter
        }
    }

    if(action.type==='increase'){

        return {
            counter:state.counter+ action.amount,
            value:'5 arttır',
            showCounter:state.showCounter
        }

    }
    if(action.type==='decrement'){
        return {
            counter:state.counter-1,
            value:'cancan',
            showCounter:state.showCounter
        }
    }
    if(action.type==='toggle')
    {
        return {
            
            showCounter:!state.showCounter,
            counter:state.counter,
            value:state.value
        }  
    }
    return state;
}*/


//const store=createStore(counterSlice.reducer);
const store=configureStore({
   reducer:{counter:counterReducer,auth:authReducer}
});



export default store;








