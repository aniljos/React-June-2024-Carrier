
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router} from 'react-router-dom'
import React, { useEffect } from "react";

import Header from './components/Header';
import MainContent from './components/MainContent';
import { routes } from './routes/routes';

// async function loadRemoteRoutes(){

//     try{
//         // @ts-ignore
//         const remoteRoutes = await import('customerRemote/routes')
//         console.log("remote-routes", remoteRoutes);
//         return remoteRoutes.routes;
//     }
//     catch(e){
//         console.log('Error loading remote routes', e);
//         return [];
//     }
// }


function App() {

    const [appRoutes, setAppRoute] = React.useState(routes);

    useEffect(() => {

        // loadRemoteRoutes().then((remoteRoutes) => {
        //     setAppRoute([...appRoutes, ...remoteRoutes]);
        // })

    }, []);

    return (
        <Router>
            <>
                <Header routes={appRoutes}/>
            </>
            <>
                <MainContent routes={appRoutes}/>
            </>
        </Router>
    )
}

export default App;