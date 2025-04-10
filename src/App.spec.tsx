import { test, expect } from "bun:test";
import { screen, render } from "@testing-library/react";
import App from "./App";

test("Can use Testing Library", () => {
	render(<App />);
	const myComponent = screen.getByText(/Hello/);
	expect(myComponent).toBeInTheDocument();
});
