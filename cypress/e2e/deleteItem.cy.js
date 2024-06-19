import mainPage from "../support/pageObjects/main-page.pageObject";

describe("Delete ", () => {
  beforeEach(() => {
    cy.visit("/");
    var todoItems = ["Apple", "Banana", "Carrot"];

    todoItems.forEach(function (item, index, array) {
      mainPage.writeInputText(item);
    });
  });

  it("Delete one item from the list", () => {
    mainPage.deleteItem();
  });
});
