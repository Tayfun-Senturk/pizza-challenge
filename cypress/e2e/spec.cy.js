Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Home Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('Anasayfa başarılı şekilde açılıyor.', () => {
    cy.get('body').should('be.visible');
  });

  it("Acıktım butonu form'a yönlendiriyor.", () => {
    cy.get('[data-cy="acıktım"]').click();
    cy.url().should('include', '/form'); 
  });
});

describe('Form Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/form');
  });

  it("Ekstra malzemeler 4'den az iken uyarı veriyor ve 10tane seçilirse kalanlar disabled oluyor.", () => {
    cy.contains("En az 4 malzeme seçmelisiniz.").should("be.visible");
    cy.get('[data-cy="Sosis"]').click();
    cy.get('[data-cy="Kabak"]').click();
    cy.get('[data-cy="Sucuk"]').click();
    cy.get('[data-cy="Biber"]').click();
    cy.contains("En az 4 malzeme seçmelisiniz.").should("not.exist");
    cy.get('[data-cy="Jalepeno"]').click();
    cy.get('[data-cy="Sarımsak"]').click();
    cy.get('[data-cy="Mısır"]').click();
    cy.get('[data-cy="Zeytin"]').click();
    cy.get('[data-cy="Ananas"]').click();
    cy.get('[data-cy="Domates"]').click();
    cy.get('[data-cy="Soğan"]').should("be.disabled");
  });

  it("Form sadece gerekli yerler doldurulunca submit edilebiliyor ve sonrasında Succes ekranı başarılı bir şekilde açılıyor",()=>{
    cy.get('[data-cy="siparişver"]').should("be.disabled")
    cy.get('[data-cy="Büyük"]').click()
    cy.get('[data-cy="hamur"]').select("Kalın")
    cy.get('[data-cy="Sarımsak"]').click();
    cy.get('[data-cy="Mısır"]').click();
    cy.get('[data-cy="Zeytin"]').click();
    cy.get('[data-cy="Ananas"]').click();
    cy.get('[data-cy="isim"]').type("Tayfun")
    cy.get('[data-cy="ordernote"]').type("Ekstra ketçap lütfen.")
    cy.get('[data-cy="increase"]').click();
    cy.get('[data-cy="siparişver"]').should("not.disabled");
    cy.get('[data-cy="siparişver"]').click();
    cy.url().should('include', '/success'); 
    cy.get('body').should('be.visible');
  })
});

