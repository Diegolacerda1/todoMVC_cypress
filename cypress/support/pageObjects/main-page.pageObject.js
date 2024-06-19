const elem = require("../elements/main-page.elements").ELEMENTS;
const checkItem = require("../elements/main-page.elements").ITEMS;
const filterItem = require("../elements/main-page.elements").FILTERS;

class mainPage {
  writeInputText(data) {
    cy.get(elem.inputToDo).type(data).type("{enter}");
  }

  checkItem() {
    cy.get(checkItem.buttonCheckbox).first().click();
  }

  filterItem(menu) {
    cy.get(filterItem.toDoFilter).contains(menu).should("be.visible").click();
  }

  deleteItem() {
    cy.get(checkItem.itemsList).first().find("button").invoke("show").click();
  }

  validateInput(text) {
    cy.get(elem.inputToDo)
      .should("have.attr", "placeholder")
     
  }

  validateCounter(number) {
    cy.get(filterItem.counter).find("strong").contains(number);
  }

  validateSizeToDo(number) {
    cy.get(checkItem.validateItemList).should("have.length", number);
  }
}

export default new mainPage();
