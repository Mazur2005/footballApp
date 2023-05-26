import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

describe("Home component", () => {
	test("renders header with correct text", () => {
		render(<Home />);
		const headerText = screen.getByText("Live Score");
		expect(headerText).toBeInTheDocument();
	});

	test("renders button with correct text and link", () => {
		render(<Home />);
		const button = screen.getByRole("link", { name: "TRY IT" });
		expect(button).toBeInTheDocument();
		expect(button.getAttribute("href")).toEqual("/AuthOptions");
	});

	test("renders image", () => {
		render(<Home />);
		const image = screen.getByAltText("Placeholder image");
		expect(image).toBeInTheDocument();
	});
});
