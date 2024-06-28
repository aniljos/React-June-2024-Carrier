import { MouseEvent, useEffect, useState } from "react";


type CounterProps = {
   
    initValue: number
}
function Counter(props: CounterProps){

    //let counter = props.initValue;
    const [counter, setCounter] = useState(props.initValue);

    useEffect(() => {
        console.log("counter updated", counter);
    }, [counter])

    function inc(evt: MouseEvent<HTMLButtonElement>){

        console.log("inc invoked..", evt);
        setCounter(counter + 1);
        
        
    }
    function decr(){
        setCounter(counter - 1);
    }

    return (
        <div>
            <h4>Counter : {counter}</h4>
            <p>This is a demo on state management</p>
            <div>
                <button onClick={inc}>Inc</button>&nbsp;
                <button onClick={decr}>Decr</button>
            </div>
        </div>
    )
}
export default Counter;