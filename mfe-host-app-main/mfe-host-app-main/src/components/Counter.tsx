import {useState, useEffect} from 'react';



type CounterProps = {
    initialValue?: number
}

//const arr = useState(props.initialValue);// array => 2 elements, 1st elemt is a variable with the state
    //2nd element is a function to update the state
    //const counter = arr[0];
    //const setCounter = arr[1];

const Counter = (props: CounterProps)=> {

    const [counter, setCounter] = useState(props.initialValue);

    useEffect(() => {
        
        console.log("counter updated", counter);

    }, [counter])

    function inc(){
        console.log("inc invoked");
        //props is read-only
        // if(props.initialValue){
        //     props.initialValue++;
        // }
        if(counter !== undefined){
            setCounter(counter + 1);
            
        }
    }
    function decr(){
        if(counter !== undefined){
            setCounter(counter - 1);
        }
    }

    return (
        <div>
            <h4>Counter</h4>
            <h5>Count: {counter}</h5>
            <div>
                <button onClick={inc}>Increment</button>&nbsp;
                <button onClick={decr}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter;