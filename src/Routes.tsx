import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import GenerateWebRoom from "./Components/GenerateWebRoom";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        children: [{
            path: "/createroom",
            element: <GenerateWebRoom />
        }
        ]
    }
]);

export default appRouter;