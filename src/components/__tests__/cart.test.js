import Cart from "../Cart";
import Header from "../Header";
import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA_NAME from "../MockData/mockResMenu.json";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("Should Render Restaurant Menu Component and show food items on accordion click", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Recommended (16)");
  fireEvent.click(accordionHeader);
console.log(screen)
  expect(screen.getAllByTestId("foodItems").length).toBe(16);

  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();
  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
});

