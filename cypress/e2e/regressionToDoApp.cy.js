import mainPage from "../support/pageObjects/main-page.pageObject";

describe("Regression ToDo App", () => {
  context("Validate Main Page", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("Validade data input", () => {
      mainPage.validateInput("What needs to be done?");
      mainPage.writeInputText("chama");
    });
  });

  context("Validate when item is added", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("Add more than one item to the list", () => {
      var todoItems = ["Apple", "Banana", "Carrot"];

      todoItems.forEach(function (item, index, array) {
        mainPage.writeInputText(item);
      });
      mainPage.validateCounter(3);
    });
  });

  context("Validate when item is completed", () => {
    beforeEach(() => {
      cy.visit("/");
      var todoItems = ["Apple", "Banana", "Carrot"];

      todoItems.forEach(function (item, index, array) {
        mainPage.writeInputText(item);
      });
    });

    it("Check item as completed", () => {
      mainPage.checkItem();
      mainPage.validateCounter(2);
    });
  });

  context("Validate filters", () => {
    beforeEach(() => {
      cy.visit("/");
      var todoItems = ["Apple", "Banana", "Carrot"];

      todoItems.forEach(function (item, index, array) {
        mainPage.writeInputText(item);
      });
      mainPage.checkItem();
    });

    it("Filter active items", () => {
      mainPage.filterItem("Active");
      mainPage.validateSizeToDo(2);
    });

    it("Filter completed items", () => {
      mainPage.filterItem("Completed");
      mainPage.validateSizeToDo(1);
    });
  });

  context("Validate when item is deleted", () => {
    beforeEach(() => {
      cy.visit("/");
      var todoItems = ["Apple", "Banana", "Carrot"];

      todoItems.forEach(function (item, index, array) {
        mainPage.writeInputText(item);
      });
    });

    it("Delete one item from the list", () => {
      mainPage.deleteItem();
      mainPage.validateSizeToDo(2);
    });
  });
});
