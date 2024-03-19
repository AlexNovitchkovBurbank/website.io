import overnightPricingContainerCreator from "../Creators/overnightPricingContainerCreator.js";
import mainPricingContainerAppender from "../Appenders/mainPricingContainerAppender.js";
import currentPricingContainersRemover from "../Removers/currentPricingContainersRemover.js";

const overnightPricingProcessor = {
    Process() {
        const mainOvernightPricingContainer = document.querySelector("#overnight-pricing-container");
      if (mainOvernightPricingContainer !== null) currentPricingContainersRemover.Remove();
      else {
        const container = overnightPricingContainerCreator.Create();

        currentPricingContainersRemover.Remove();

        mainPricingContainerAppender.Append(container);
      }
    }
}

export default overnightPricingProcessor;