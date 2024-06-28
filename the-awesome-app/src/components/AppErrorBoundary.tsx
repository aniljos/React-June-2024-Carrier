import { Component, ErrorInfo, ReactNode } from "react";

class AppErrorBoundary extends Component<{children: any}>{

    state = { 
        hasError: false 
    };

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        if(error){
            this.setState({hasError: true})
        }
    }

    render(): ReactNode {

        if(this.state.hasError){
            return (
                <div className="alert alert-danger">
                    <p>Technical Error</p>
                    <p>Please reload <a href="http://localhost:3001">Reload</a></p>
                </div>
            )
        }
        else{
            return this.props.children;
        }
       
    }

}

export default AppErrorBoundary;