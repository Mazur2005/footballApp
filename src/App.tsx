import { AuthOptions } from "./pages/authOptions/AuthOptions";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { SingIn } from "./pages/authOptions/children/SingIn";
import { SingUp } from "./pages/authOptions/children/SingUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RemindPassword } from "./pages/authOptions/children/RemindPassword";

const router = createBrowserRouter([
	{
		errorElement: <ErrorPage />,
		path: "/footballApp/",
		children: [
			{ index: true, element: <Home /> },

			{
				path: "/footballApp/AuthOptions",
				children: [
					{ index: true, element: <AuthOptions /> },
					{ path: "SingIn", element: <SingIn /> },
					{ path: "SingUp", element: <SingUp /> },
					{ path: "RemindPassword", element: <RemindPassword /> },
				],
			},
		],
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
