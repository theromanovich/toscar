import React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";

import About from "./page/About/About"
import Content from "./components/Content/Content"

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <h1>Hello World</h1>
                <Link to="about">About Us</Link>
                <br/>
                <Link to="contact-us">Contact Us</Link>
                <br/>
                <Link to="doctors">Our doctors</Link>
            </div>
        ),
    },
    {
        path: "about",
        element: <About/>,
    },
    {
        path: "contact-us",
        element: <div>
            <Content/>
        </div>,
    },
    {
        path: "doctors",
        element: <div>
           <h1>Our doctors list</h1>
            <ul>
                <li>Petro</li>
                <li>Ivan</li>
            </ul>
        </div>,
    },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);