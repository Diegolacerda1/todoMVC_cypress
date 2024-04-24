import mainPage from "../support/pageObjects/main-page.pageObject";

describe('add items to todo list', () => {
    beforeEach(() => {
        cy.visit('/') 
    });
    it('Add one item to the list', () => {
        mainPage.inputText("item1")
    });

    it('Add more than one item to the list', () => {
        
        var todoItems = ["Apple", "Banana", "Carrot"];

        todoItems.forEach(function(item, index, array){
            mainPage.inputText(item)
        })
    });
});