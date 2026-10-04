import { useDispatch, useSelector } from "react-redux";
import { increment as incrementAction, decrement as decrementAction } from '../models/slices/Counter';
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";


const Counter = () => {
    const dispatch = useDispatch();
    const counterVal = useSelector((state: StateSchema) => state.counter.value);
    const increment = () => {
        console.log('increment');
        dispatch(incrementAction());
    };
    const decrement = () => {
        dispatch(decrementAction());

    };
    return <div  >
        <h1 data-testid="counter-title">{counterVal}</h1>
        <button onClick={increment} data-testid="increment-button">
            inc
        </button>
        <button onClick={decrement} data-testid="decrement-button">
            dec
        </button>
    </div>;
};

export default Counter;
