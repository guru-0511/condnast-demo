import { selectors } from "../../selectors/selectors"

Given('I navigate to ipricegroup home page',()=>{
    cy.visit("/coupons/");
})
Then('verify the top store section should appears with coupon store tiles',()=>{
    cy.get("header h2").contains("Top Stores");
    cy.get(selectors.element.topStoresTitle).first().should("be.visible");
    cy.get(selectors.element.couponStoreItem).should("have.length", 14);
})
And('verify the Top Stores contains Url and its navigate to correct item',()=>{
    cy.get(selectors.element.topStoreList).then(($test) => {
        for (let i = 0; i < $test.length; i++) {
          const txt = $test[i].outerText
            .toLowerCase()
            .split(" ")
            .slice(-1)
            .join(" ");
          cy.get(selectors.element.topStoreIcon).eq(i).click();
          cy.url().should("include", txt);
          cy.get(selectors.element.breadcrumb).first().click();
        }
      });
})