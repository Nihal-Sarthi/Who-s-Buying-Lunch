let names = ["Nihal", "Ankit", "Prajjwal", "Pratiksha", "Shriya"];
function whoIsBuying(names) {
  let numOfPeople = names.length;
  let indexOfPerson = Math.floor(Math.random() * numOfPeople);
  personBuyingLunch = names[indexOfPerson];
  return `${personBuyingLunch} will buy lunch today!`;
}
