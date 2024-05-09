import mainPage from "../support/pageObjects/main-page.pageObject";

describe("Open todoMVC web page", () => {
  it("open the website main page", () => {
    cy.visit("https://todomvc.com/examples/javascript-es6/dist/");
    mainPage.inputText();
  
  });
});
