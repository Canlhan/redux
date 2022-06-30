const redux =require('redux');

const counterReducer=(state={counter:0},action)=>{

        if(action.type==='increment')
        {
            return {
        
                counter:state.counter+1
            };

        }


        return state;
}

const store=redux.createStore(counterReducer);

const counterSubsriceber=() =>{

     const latestState=store.getState();
     console.log(latestState);
};


store.subscribe(counterSubsriceber);

store.dispatch({type:'increment'})

store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:''})
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
