import { useSelector,useDispatch} from 'react-redux';
import { counterActions } from '../store/counter-slice';


import classes from './Counter.module.css';

const Counter = () => {
  
  const counter=  useSelector( state=> state.counter.value)
  const name=useSelector(state=>state.counter.counter);
  const toggle=useSelector(state=>state.counter.showCounter);
  const dispatch=useDispatch();

  const toggleCounterHandler = () => 
  {
    //dispatch({type:'toggle'});
    dispatch(counterActions.toggleCounter());
  };


  const incrementHandler=()=>{
    //dispatch({type:'increment'});
    dispatch(counterActions.increment());
  }
  const decrementHandler=()=>{
   // dispatch({type:'decrement'});
   dispatch(counterActions.decrement());
  }
  const  increaseHandler=()=>{
    //dispatch({type:'increase',amount:15});
    dispatch(counterActions.increase(5));
  }

  return (
    <main className={classes.counter}>
      <h1>{name}</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}> increment</button>
        <button onClick={increaseHandler}> Increase by 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
