const fs = require('fs');

genders = ['M', 'F'];
maleNames = ['Jan','Dawid', 'Karol', 'Hubert'];
femaleNames = ['Anna','Katarzyna', 'Joanna', 'Magorzata'];
lastNames = ['Kowal','Nowak', 'Perepeczko', 'Piekarz'];
minAge = 18;
maxAge = 78;

function randChoice(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}

function randomAge(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const people = {};

for (let i = 0; i <=20; i++) {

    let gender = randChoice(genders);
    age = randomAge(minAge, maxAge);

    people[i] = {
        gender: gender,
        firstname: gender=='M'? randChoice(maleNames) : randChoice(femaleNames),
        lastname: randChoice(lastNames),
        age: age
    }
}

const peopleToJson = JSON.stringify(people);

console.log(peopleToJson);

fs.writeFile('people.json', peopleToJson, (err) => {
    if (err) throw err;
    console.log('The file has been successfully saved!');
});