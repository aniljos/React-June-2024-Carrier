type MessageProps = {
    text: string;
    color?: string;
}

function Message(props: MessageProps){
    return (
        <div>
            <h4 style={{color: props.color}}>Message: {props.text}</h4>
            <p>This is a functional component</p>
            <p>Generate at {new Date().toLocaleString() }</p>
        </div>
    );
}
export default Message;

