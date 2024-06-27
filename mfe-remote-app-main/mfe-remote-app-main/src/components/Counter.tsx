import {useState, useEffect} from 'react';

type CounterProps = {
    initialValue?: number
}

const Counter = (props: CounterProps)=> {

    const [counter, setCounter] = useState(props.initialValue);

    useEffect(() => {
        
        console.log("counter updated", counter);
        window.addEventListener('counter', (e: any) => {
            console.log(e)
            setCounter(e.detail)
        })

    }, [counter])

    function inc(){
        console.log("inc invoked");
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
            <h4>Counter from Remote</h4>
            <div role='alert' aria-live='assertive' className='alert alert-info'>Count: {counter}</div>
            <div>
                <button autoFocus className='btn btn-success' onClick={inc}>Increment</button>&nbsp;
                <button className='btn btn-danger' onClick={decr}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter;