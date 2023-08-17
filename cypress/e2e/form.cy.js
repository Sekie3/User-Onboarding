describe("Form Tests", () => {
    it("checks if the name input contains the provided name", () => {
      cy.visit("http://localhost:3000/");
      
      // Type a name in the Name input
      cy.get('input[name="username"]').type("John Doe");
      
      // Assert that the input value contains the provided name
      cy.get('input[name="username"]').should("have.value", "John Doe");
    });
  
    it("fills out the email and password inputs", () => {
      cy.visit("http://localhost:3000/");
      
      // Type an email in the Email input
      cy.get('input[name="email"]').type("test@example.com");
      
      // Type a password in the Password input
      cy.get('input[name="password"]').type("password123");
    });
  
    it("checks if a user can check the terms of service box", () => {
      cy.visit("http://localhost:3000/");
      
      // Check the terms of service checkbox
      cy.get('input[name="tos"]').check();
      
      // Assert that the checkbox is checked
      cy.get('input[name="tos"]').should("be.checked");
    });
  
    it("submits the form data", () => {
      cy.visit("http://localhost:3000/");
      
      // Fill out the form inputs
      cy.get('input[name="username"]').type("John Doe");
      cy.get('input[name="email"]').type("test@example.com");
      cy.get('input[name="password"]').type("password123");
      cy.get('input[name="tos"]').check();
      
      // Submit the form
      cy.get('input[type="submit"]').click();
    });
  
    it("checks for form validation with empty input", () => {
      cy.visit("http://localhost:3000/");
      
      // Leave the Name input empty
      // ...
  
      // Leave the Email input empty
      // ...
  
      // Leave the Password input empty
      // ...
  
      // Don't check the terms of service checkbox
      // ...
  
      // Try to submit the form
      cy.get('input[type="submit"]').click();
      
      // Assert that validation errors are displayed for each field
      cy.get('.error-message').should("have.length", 3);
    });
  });
  