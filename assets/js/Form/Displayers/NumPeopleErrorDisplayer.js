const NumPeopleInputErrorDisplayer =  {
    Display(numPeopleInputId) {
        const numPeopleInput = document.querySelector(`#${numPeopleInputId}`);

    if (numPeopleInput !== null)
      numPeopleInput.classList.add("input-error");
    }
  }

  export default NumPeopleInputErrorDisplayer;