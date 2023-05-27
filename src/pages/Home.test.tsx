import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Router } from "react-router-dom";
import { Home } from "./Home";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";

test("renders Home component", () => {
	render(
		<MemoryRouter>
			<Home />
		</MemoryRouter>
	);

	const mainHeader = screen.getByText("Live Score");
	expect(mainHeader).toBeInTheDocument();

	const secondaryHeader = screen.getByText("Football score for free");
	expect(secondaryHeader).toBeInTheDocument();

	const link = screen.getByText("TRY IT");
	expect(link).toBeInTheDocument();
	expect(link).toHaveAttribute("href", "/AuthOptions");

	const image = screen.getByLabelText("Add page");
	expect(image).toBeInTheDocument();
});
test("click link and change url", async () => {
	const history = createMemoryHistory();
	const spy = jest.spyOn(history, "push");
	render(
		<Router location={history.location} navigator={history}>
			<Home />
		</Router>
	);

	const link = screen.getByText("TRY IT");
	expect(history.location.pathname).toBe("/");
	fireEvent.click(link);
	await waitFor(() => {
		expect(spy).toBeCalled();
		expect(history.location.pathname).toBe("/AuthOptions");
	});
});
