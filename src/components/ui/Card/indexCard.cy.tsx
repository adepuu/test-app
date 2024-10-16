import React from 'react'
import Card from './index'
import { Provider } from "react-redux";
import { store } from '@/store';

describe('<Card />', () => {
  it('renders', () => {
    if (typeof window !== 'undefined') {
      window.store = store;
    }

    cy.mount(<Provider store={store}><Card name='Product 1' price={1000} /></Provider>)
  
    cy.get('[data-testid="product-name"]').should("be.visible").and("contain", "Product 1");
    cy.get('[data-testid="product-price"]').should("be.visible").and("contain", "IDR 1000");
    cy.get('[data-testid="add-to-cart"]').should("be.visible").and("contain", "Add To Cart");
    cy.get('[data-testid="add-to-cart"]').click();
    
    cy.window().its('store').invoke('getState').its('cart').its('items').should('have.length', 1);
    cy.get('[data-testid="add-to-cart"]').click();
    cy.window().its('store').invoke('getState').its('cart').its('items').its(0).should('have.property', 'quantity', 2);
  });
});