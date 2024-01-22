'use strict'
const arrayOfObjects = [
    { name: "alice", favoriteColor: "green" },
    { name: "bob", favoriteColor: "blue" },
];
function getNames(array) {
    return array.map(function (obj) {
        return obj["name"];
    });
}
console.log( getNames( arrayOfObjects ) );
