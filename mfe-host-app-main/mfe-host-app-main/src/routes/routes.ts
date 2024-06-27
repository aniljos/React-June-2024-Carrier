import React from "react";
import Counter from "../components/Counter";
import EditProduct from "../components/EditProduct";
import GadgetStore from "../components/GadgetStore";

import Login from "../components/Login";
import Message from "../components/Message";
//import ListProducts from "../components/ListProducts";

const ListProducts = React.lazy(() => import("../components/ListProducts"));

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
        path: "/",
        element: Message,
        title: "Home",
        secure: false,
        isOnNav: true,
        props: {text: "MFE Host Application"}
    },
    {
        path: "/counter",
        element: Counter,
        title: "Counter",
        secure: false,
        isOnNav: true,
        props: {initialValue: 4}
    },
    {
        path: "/login",
        element: Login,
        title: "Login",
        secure: false,
        isOnNav: true,
        
    },
    {
        path: "/products",
        element: ListProducts,
        title: "Products",
        secure: true,
        isOnNav: true,
        
    },
    {
        path: "/products/:id",
        element: EditProduct,
        title: "Edit",
        secure: true,
        isOnNav: false,
        
    },
    {
        path: "/gadgets",
        element: GadgetStore,
        title: "Gadgets",
        secure: true,
        isOnNav: true,
        
    },


]