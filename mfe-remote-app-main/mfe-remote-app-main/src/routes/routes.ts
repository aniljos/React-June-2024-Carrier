import React from "react";
import RemoteCounter from "../components/Counter";
import ListCustomers from "../components/ListCustomers";
import EditCustomer from "../components/EditCustomer";


export interface AppRoute{
    path: string;
    element: any;
    title: string;
    secure: boolean;
    isOnNav: boolean;
    props?: object;
}

export const routes: Array<AppRoute> = [

    {
        path: "/remote-counter",
        element: RemoteCounter,
        title: "RemoteCounter",
        secure: false,
        isOnNav: true,
        props: {initialValue: 4}
    },
    {
        path: "/customers",
        element: ListCustomers,
        title: "Customers",
        secure: false,
        isOnNav: true,
        
    },
    {
        path: "/edit-customer",
        element: EditCustomer,
        title: "Edit Customer",
        secure: false,
        isOnNav: false,
        
    },


]