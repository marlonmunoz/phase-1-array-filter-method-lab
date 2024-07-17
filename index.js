// Code your solution here
function findMatching(driverNames, nameToMatch) {
    return driverNames.filter(driverName => {
        return driverName.toUpperCase() === nameToMatch.toUpperCase();

    })
}

// function fuzzyMatch(driverNames, startsWithString){
//     return driverNames.filter(driverName => {
//         for(let index = 0; index < startsWithString.length; index++) {
//             if (driverName[index] !== startsWithString[index]) {
//                 return false;
//             }
//         }
//         return true;
//     })
// }

// test
// const driverNames = ['Alice', 'Bob', 'Alex']
// const fuzzyDrivers = fuzzyMatch(driverNames, 'Al')
// console.log(fuzzyDrivers);



// const word = 'hello'

// word[0];  // h
// charAt(0); // h

function fuzzyMatch(driverNames, startsWithString){
    return driverNames.filter(driverName => {
        return driverName.startsWith(startsWithString);
    })
}


// function matchName(drivers, name){
//     return drivers.filter(driver => {
//         for (let key in driver) {
//             if (driver[key] === name) {
//                 return driver[key];
//             }
//         }
//     })
// }

function matchName(drivers, name){
    return drivers.filter(driver => {
        return driver.name === name;
    })
}