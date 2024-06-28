
// HOC is a function that takes a component and returns a new component with some additional functionality.
const withBorder = (WrappedComponent: React.FC<any>) => {

    // // Return a new component
    // return (props: any) => {
    //     return (
    //         <div style={{border: '2px solid red'}}>
    //             <WrappedComponent {...props}/> 
    //         </div>
    //     )
    // }


     // Return a new component
     return function withBorderHOC(props: any){
        return (
            <div style={{border: '2px solid red'}}>
                <WrappedComponent {...props}/> 
            </div>
        )
    }
}

export default withBorder;