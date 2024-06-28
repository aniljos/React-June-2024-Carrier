type MessageProps = {
    text: string;
    color?: string;
}

function MessageWithError(props: MessageProps){

    const user: any={id: 1, name: "Anil"}
    return (
        <div>
            <h4 style={{color: props.color}}>Message: {props.text}</h4>
            <p>This is a functional component</p>
            <p>Generate at {new Date().toLocaleString() }</p>
            <p>User: {user}</p>
        </div>
    );
}
export default MessageWithError;

