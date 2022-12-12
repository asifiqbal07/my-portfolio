import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home/Home";
import LZ from "../Pages/Home/Projects/LZ/LZ";
import FLink from "../Pages/Home/Projects/FL/FLink";
import SkillUp from "../Pages/Home/Projects/SkillUp/SkillUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/project/laptopzone',
                element: <LZ></LZ>,
            },
            {
                path: '/project/fastlink',
                element: <FLink></FLink>,
            },
            {
                path: '/project/skillup',
                element: <SkillUp></SkillUp>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
        ]
    }
])