const settings = require("./settings");
const config = require("./knexscript.js");
const env = "development";
const knex = require("knex")(config[env])

var argument1 = process.argv[2];
var argument2 = process.argv[3];
var argument3 = process.argv[4];
console.log(argument1 + argument2 + argument3);
var insert1 = [{first_name:argument1, last_name: argument2, birthdate: argument3}];
knex.insert(insert1).into('famous_people').then(function(id){
console.log(id);
})
// knex('test_db').insert({first_name: 'Oksana'})




// id | first_name | last_name  | birthdate
// ----+------------+------------+------------
//   1 | Abraham    | Lincoln    | 1809-02-12
//   2 | Mahatma    | Gandhi     | 1869-10-02
//   3 | Paul       | Rudd       | 1969-04-06
//   4 | Paul       | Giamatti   | 1967-06-06
//   5 | Konstantin | Toroshchin | 1987-02-18
//   6 | Konstantin | Toroshchin | 1987-02-18
// (6 rows)
//
//
//
//
//
// var argument = process.argv[2];
// console.log(argument);
//
// function printPeople(input){
//   console.log("Found " + input.length + " persons by the name of " + argument);
//   for(const people of input){
//   console.log(" - " + people.id + " " + people.first_name + people.last_name + " ," + " born " + people.birthdate.toString().slice(0,16))
//   }
// }
