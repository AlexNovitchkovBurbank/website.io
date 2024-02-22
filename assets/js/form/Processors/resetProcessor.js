import CurrentFamilyMemberRecordsContainerRemover from "../Removers/CurrentFamilyMemberRecordsContainerRemover.js";
import NumPeopleFieldErrorRemover from "../Removers/NumPeopleFieldErrorRemover.js";
import DayUseOnlyNumberOfPeopleRemover from "../Removers/DayUseOnlyNumPeopleRemover.js";
import SleepOnGroundNumberOfPeopleRemover from "../Removers/SleepOnGroundNumPeopleRemover.js";
import StayInChaletNumberOfPeopleRemover from "../Removers/StayInChaletNumPeopleRemover.js";
import StayInRvNumberOfPeopleRemover from "../Removers/StayInRvNumPeopleRemover.js";
import StayInTentNumberOfPeopleRemover from "../Removers/StayInTentNumPeopleRemover.js";
import StayOvernightNumberOfPeopleRemover from "../Removers/StayOvernightNumPeopleRemover.js";

const ResetProcessor = {
  Process() {
    const numPeopleInputId = "num-people-input";
    NumPeopleFieldErrorRemover.Remove(numPeopleInputId);

    StayInChaletNumberOfPeopleRemover.Remove();
    StayInRvNumberOfPeopleRemover.Remove();
    StayInTentNumberOfPeopleRemover.Remove();
    SleepOnGroundNumberOfPeopleRemover.Remove();
    StayOvernightNumberOfPeopleRemover.Remove();
    DayUseOnlyNumberOfPeopleRemover.Remove();
    CurrentFamilyMemberRecordsContainerRemover.Remove();
  },
};

export default ResetProcessor;