import React from 'react';
import '@testing-library/jest-dom'
import configureStore from 'redux-mock-store';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Card from './index';
import { RootState } from '@/store';
import { addItem } from '@/features/cart/cartSlice';

const mockStore = configureStore<RootState>();

describe('<Card />', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      cart: {
        items: [],
        total: 0
      },
    });
    store.dispatch = jest.fn();
  });

  it('should render and handle add to cart', () => {
    render(
      <Provider store={store}>
        <Card name='Product 1' price={1000} />
      </Provider>
    )

    // Check if the product name is rendered
    expect(screen.getByTestId("product-name")).toHaveTextContent("Product 1");
    expect(screen.getByTestId("product-price")).toHaveTextContent("IDR 1000");
    expect(screen.getByTestId("add-to-cart")).toHaveTextContent("Add To Cart");

    // Click add to cart button
    fireEvent.click(screen.getByTestId("add-to-cart"));
    expect(store.dispatch).toHaveBeenCalledWith(addItem({name: "Product 1", price: 1000, stock: 1}));

    fireEvent.click(screen.getByTestId("add-to-cart"));
    expect(store.dispatch).toHaveBeenCalledTimes(2);
  })
});
