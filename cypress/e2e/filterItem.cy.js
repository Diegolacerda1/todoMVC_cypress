import mainPage from "../support/pageObjects/main-page.pageObject";

describe('Validate app filters after adding items', () => {
  beforeEach(() => {
    cy.visit("/");
    var todoItems = ["Apple", "Banana", "Carrot"];

    todoItems.forEach(function (item, index, array) {
      mainPage.inputText(item);
    });
    mainPage.checkItem()
  });


  //select filter
   // item should be shown
   // counter should show right info 

  it("Filter active items", () => {
   mainPage.filterItem("Active")
});


it("Filter completed items", () => {
    mainPage.filterItem("Completed")
});


});
