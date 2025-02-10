import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Days from "../pages/Days";
import HomePage from "../pages/HomePage"
import App from "../App";
import RoseDay from "../pages/RoseDay";
import ProposeDay from "../pages/ProposeDay";
import ChocoDay from "../pages/ChocoDay";
import TeddyDay from "../pages/TeddyDay";
import PromiseDay from "../pages/PromiseDay";
import HugDay from "../pages/HugDay";
import KissDay from "../pages/KissDay";
import VDay from "../pages/VDay";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/days",
                element: <Days />
            },
            {
                path: "rose_day",
                element: <RoseDay />
            },
            {
                path: "propose_day",
                element: <ProposeDay />
            },
            {
                path: "choco_day",
                element: <ChocoDay />
            },
            {
                path: "teddy_day",
                element: <TeddyDay />
            },
            {
                path: "promise_Day",
                element: <PromiseDay />
            },
            {
                path: "hug_day",
                element: <HugDay />
            },
            {
                path: "kiss_day",
                element: <KissDay />
            },
            {
                path: "v_day",
                element: <VDay />
            },
        ]
    }
])