import individualMealPricingContainerCreator from "../Creators/individualMealPricingContainerCreator.js";
import mainPricingContainerAppender from "../Appenders/mainPricingContainerAppender.js";
import currentPricingContainersRemover from "../Removers/currentPricingContainersRemover.js";

const individualMealPricingProcessor = {
  Process() {
    const mainIndividualMealPricingContainer = document.querySelector(
      "#individual-meal-pricing-container"
    );
    if (mainIndividualMealPricingContainer !== null)
      currentPricingContainersRemover.Remove();
    else {
      const container = individualMealPricingContainerCreator.Create();

      currentPricingContainersRemover.Remove();

      mainPricingContainerAppender.Append(container);
    }
  },
};

export default individualMealPricingProcessor;
