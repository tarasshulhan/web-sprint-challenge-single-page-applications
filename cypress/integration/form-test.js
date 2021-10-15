describe('Lambda Eats', () => {
    beforeEach(() => {
        // Before each test, we need fresh state!
        // aka, we don't want to rely on state
        // left over from a previous test
        cy.visit('http://localhost:3000/pizza');
    })

    const nameInput = () => cy.get('input[name=name]');
    const sizeInput = () => cy.get('select[name=size]');
    const pepperoniInput = () => cy.get('input[name=pepperoni]');
    const prosciuttoInput = () => cy.get('input[name=prosciutto]');
    const threeCheeseInput = () => cy.get('input[name=threeCheese]');
    const sausageInput = () => cy.get('input[name=sausage]');
    const specialInput = () => cy.get('input[name=special]');
    const orderBtn = () => cy.get('button[id=order-button]');

    it('sanity check to make sure tests work', () => {
        // "it" is a test
        // "expect" is an assertion
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({}); // strict ===
        expect({}).to.eql({}); // not strict ==
    })

    it('the proper elements are showing', () => {
        nameInput().should('exist');
        sizeInput().should('exist');
        pepperoniInput().should('exist');
        prosciuttoInput().should('exist');
        threeCheeseInput().should('exist');
        sausageInput().should('exist');
        specialInput().should('exist');
        orderBtn().should('exist');
    })

    it('can navigate to the url', () => {
        cy.url().should('include', 'localhost');
    })

    // submit button should start out disabled
    it('order button starts out disabled', () => {
        orderBtn().should('be.disabled');
    })

    describe('Filling out the inputs', () => {
        // We can use optional describe blocks to organize and group our tests
        // Can we navigate to the url


        // type in the inputs
        it('can type in the inputs', () => {
            nameInput()
                .should('have.value', '')
                .type('Name Nameson')
                .should('have.value', 'Name Nameson');
            specialInput()
                .should('have.value', '')
                .type('stuff')
                .should('have.value', 'stuff');
        })

        it('can select size', () => {
            sizeInput()
                .should('have.value', '')
                .select('medium')
                .should('have.value', 'medium');
        })

        it('can add toppings', () => {
            pepperoniInput()
                .should('not.be.checked')
                .check()
                .should('be.checked')
            threeCheeseInput()
                .should('not.be.checked')
                .check()
                .should('be.checked')
        })

        it('button is enabled when required inputs are filled out', () => {
            orderBtn().should('be.disabled');
            nameInput().type('Name Nameson');
            sizeInput().select('medium');
            orderBtn().should('not.be.disabled');
        })

        it('can submit order', () => {
            nameInput().type('Name Nameson');
            sizeInput().select('medium');
            pepperoniInput().check();
            threeCheeseInput().check();
            specialInput().type('stuff')
            orderBtn().should('not.be.disabled');
            orderBtn().click();
            cy.url().should('include','/success')
        })


    })
})