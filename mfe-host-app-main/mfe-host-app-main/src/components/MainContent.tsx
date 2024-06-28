import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoute } from "../routes/routes";
import ProtectedRoute from "./ProtectedRoute";
type MainContentProps = {
    routes: Array<AppRoute>

}

// const RemoteCounter = React.lazy(() => import('customerRemote/Counter'));
// // @ts-ignore
// const ListCustomers = React.lazy(() => import('customerRemote/ListCustomers'));
// // @ts-ignore
// const EditCustomer = React.lazy(() => import('customerRemote/EditCustomer'));

function MainContent({routes}: MainContentProps) {
    return (
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {routes.map(route => {

                        const Element = route.element;
                        if (route.secure) {
                            return (
                                <Route key={route.path} path={route.path} element={<ProtectedRoute> <Element {...route.props} /> </ProtectedRoute>} />
                            )
                        }
                        else {
                            return (
                                <Route key={route.path} path={route.path} element={<Element {...route.props} />} />
                            )
                        }

                    })}
                    {/* <Route path="/remote-counter" element={<RemoteCounter />} />
                    <Route path="/customers" element={<ListCustomers />} />
                    <Route path="/edit-customer" element={<EditCustomer />} /> */}
                   
                </Routes>
            </Suspense>
        </main>
    );
}

export default MainContent;