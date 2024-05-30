/*
const justFood = (pocetOsob) => {
    return `Catering od Just Food pro ${pocetOsob} lidí za 300000 Kč`
};

const yourMama = (pocetOsob) => {
    return `Catering od Your Mama pro ${pocetOsob} lidí za 400000 Kč`
};

const flavourHeaven = (pocetOsob) => {
    return `Catering od Flavour Haven pro ${pocetOsob} lidí za 500000 Kč`
};  

console.log(justFood(100));
console.log(yourMama(100));
console.log(flavourHeaven(100));
*/


const createEvent = (udalost, pocetLidi, cateringFunkce) => {
    const catering = cateringFunkce(pocetLidi);
    return `Událost ${udalost} s catering od ${catering} pro ${pocetLidi} lidí za 500000 Kč`;
}

const flavourHeaven = (pocetLidi) => {
    return 'Flavour Heaven';
}

const message = createEvent('Inaugurace prezidenta', 100, flavourHeaven);
console.log(message);