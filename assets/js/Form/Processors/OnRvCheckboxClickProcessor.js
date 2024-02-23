import NumPeopleContainerCreator from "../Creators/NumPeopleContainerCreator.js";
import StayInRvNumberOfPeopleRemover from "../Removers/StayInRvNumPeopleRemover.js";

const OnRvCheckboxClickProcessor = {
  Process() {
    const stayInRvCheckboxContainer = document.querySelector(
      "#stay-in-rv-checkbox"
    );

    try {
      if (stayInRvCheckboxContainer.checked) {
        const numPeopleInputName = "number-of-people-in-rv";
        const numPeopleInputId = "num-people-in-rv";

        const formFieldNumPeopleContainer =
          NumPeopleContainerCreator.Create(numPeopleInputId, numPeopleInputName);

        const stayInRvContainer = document.querySelector(
          "#stay-in-rv-container"
        );
        stayInRvContainer.appendChild(formFieldNumPeopleContainer);
      } else StayInRvNumberOfPeopleRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default OnRvCheckboxClickProcessor;