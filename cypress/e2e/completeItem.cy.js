import mainPage from "../support/pageObjects/main-page.pageObject";

describe('Check "done" items on the list', () => {
  beforeEach(() => {
    cy.visit("/");
    var todoItems = ["Apple", "Banana", "Carrot"];

    todoItems.forEach(function (item, index, array) {
      mainPage.inputText(item);
    });
  });

  it("Add more than one item to the list", () => {
    mainPage.checkItem()
});
});
