const DayUseOnlyTotalCostContainerCreator = {
  Create(cost) {
    const paragraphFieldContainer = document.createElement("div");
    paragraphFieldContainer.className = "text-field";
    paragraphFieldContainer.id = "day-use-only-total-cost";
    const paragraph = document.createElement("p");
    paragraphFieldContainer.textContent = `Cost: ${cost}`;
    paragraphFieldContainer.appendChild(paragraph);

    return paragraphFieldContainer;
  },
};

export default DayUseOnlyTotalCostContainerCreator;