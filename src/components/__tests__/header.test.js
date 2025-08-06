import { fireEvent,render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load Header Component with Login Btn", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //  assertions
  const loginButton = screen.getByRole("button", { name: "Login" });
  // const loginButton = screen.getByText('Logout');
  expect(loginButton).toBeInTheDocument();
});

it("Should load Header Component with 0 Cart Items )", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //  assertions
  const cartItems = screen.getByText("Cart - (0 items)");
  expect(cartItems).toBeInTheDocument();
});

it("Should check Header Component  Cart Items )", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //  assertions
  const cartText = screen.getByText(/Cart/);
  expect(cartText).toBeInTheDocument();
});

it("Should change Login Text to Logout onClick)", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //  assertions
  const loginBtn = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginBtn);
  const logoutBtn = screen.getByRole("button", { name: "Logout" });
  expect(logoutBtn).toBeInTheDocument();
});
