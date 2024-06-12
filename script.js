const justFood = (numPeople) => {
    const costPerPerson = 1000;
    const totalCost = numPeople * costPerPerson;
    return `Catering od Just Food pro ${numPeople} lidí za ${totalCost} Kč`;
  };
  
  const yourMama = (numPeople) => {
    const costPerPerson = 2000;
    const totalCost = numPeople * costPerPerson;
    return `Catering od Your Mama pro ${numPeople} lidí za ${totalCost} Kč`;
  };
  
  const flavourHaven = (numPeople) => {
    const costPerPerson = 3000;
    const totalCost = numPeople * costPerPerson;
    return `Catering od Flavour Haven pro ${numPeople} lidí za ${totalCost} Kč`;
  };
  
  const createEvent = (eventName, numPeople, cateringFunction) => {
    const cateringMessage = cateringFunction(numPeople);
    return `Událost ${eventName} s ${cateringMessage}`;
  };
  
  
  console.log(createEvent('Inaugurace prezidenta', 100, flavourHaven));
  console.log(createEvent('Firemní večírek', 100, yourMama));
  console.log(createEvent('Rodinná oslava', 100, justFood));