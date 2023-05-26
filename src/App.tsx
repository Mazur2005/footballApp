import { AuthOptions } from "./pages/AuthOptions";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/AuthOptions",
		element: <AuthOptions />,
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
