import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
        path : "/",
        element : <h1>Home page</h1>
    },
    {
        path:"/about",
        element : <h1>About Page</h1>
    }
])


export default router;