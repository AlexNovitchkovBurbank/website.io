import chaletPriceCalculator from "../Calculators/chaletPriceCalculator";
import RVPriceCalculator from "../Calculators/RVPriceCalculator";
import tentPriceCalculator from "../Calculators/tentPriceCalculator";

const totalConstProcessor = {
    Process() {
        let totalCostForChaletStay = 0;
        let totalCostForRVStay = 0;
        let totalCostForTentStay = 0;
        let totalCostForOvernightStay = 0;
        
        const familyInfoStayInChaletContainer = document.querySelector("#stay-in-chalet-container");
        if (familyInfoStayInChaletContainer !== null) {
          const familyInfoNumPeopleInChaletContainer = familyInfoStayInChaletContainer.querySelector(".form-field-container");
    
          if (familyInfoNumPeopleInChaletContainer !== null) {
            const numPeopleInput = familyInfoNumPeopleInChaletContainer.querySelector("#num-people-input");

            if (numPeopleInput !== null) {
              totalCostForChaletStay = chaletPriceCalculator.Calculate(numPeopleInput.textContent);
            }
          }
        }
    
        const familyInfoStayInRvContainer = document.querySelector("#stay-in-rv-container");
        if (familyInfoStayInRvContainer !== null) {
          const familyInfoNumPeopleInRvContainer = familyInfoStayInRvContainer.querySelector(".form-field-container");
    
            if (familyInfoNumPeopleInRvContainer !== null) {
              const numPeopleInput = familyInfoNumPeopleInRvContainer.querySelector("#num-people-input");
  
              if (numPeopleInput !== null) {
                totalCostForRVStay = RVPriceCalculator.Calculate(numPeopleInput.textContent);
              }
          }
        }
    
        const familyInfoStayInTentsContainer = document.querySelector("#stay-in-tents-container");
        if (familyInfoStayInTentsContainer !== null) {
          const familyInfoNumPeopleInTentsContainer = familyInfoStayInTentsContainer.querySelector(".form-field-container");
    
          if (familyInfoNumPeopleInTentsContainer !== null) {
            const numPeopleInput = familyInfoNumPeopleInTentsContainer.querySelector("#num-people-input");
  
              if (numPeopleInput !== null) {
                totalCostForTentStay = tentPriceCalculator.Calculate(numPeopleInput.textContent);
              }
          }
        }
    
        const familyInfoSleepOnGroundContainer = document.querySelector("#sleep-on-ground-container");
        if (familyInfoSleepOnGroundContainer !== null) {
          const familyInfoNumPeopleSleepOnGroundContainer = familyInfoSleepOnGroundContainer.querySelector(".form-field-container");

          if (familyInfoNumPeopleSleepOnGroundContainer !== null) {
            familyInfoSleepOnGroundContainer.querySelector();
          }
        }
    
    }
}

export default totalConstProcessor;