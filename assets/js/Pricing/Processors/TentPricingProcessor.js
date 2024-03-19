import tentPricingContainerCreator from "../Creators/tentPricingContainerCreator.js";
import mainPricingContainerAppender from "../Appenders/mainPricingContainerAppender.js";
import currentPricingContainersRemover from "../Removers/currentPricingContainersRemover.js";

const tentPricingProcessor = {
    Process() {
        const maInTentPricingContainer = document.querySelector("#tent-pricing-container");
      if (maInTentPricingContainer !== null) currentPricingContainersRemover.Remove();
      else {
        const container = tentPricingContainerCreator.Create();

        currentPricingContainersRemover.Remove();

        mainPricingContainerAppender.Append(container);
      }
    }
}

export default tentPricingProcessor;