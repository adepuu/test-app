describe('Product List Page', () => {
  it('shows list of products', () => {
    cy.visit("http://localhost:3000");
    // wait for the products to load
    cy.wait(1000);
    cy.get("[data-testid='product-name']").should("be.visible").and("have.length.above", 0);
  })
})