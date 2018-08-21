const pg = require("pg");
const settings = require("./settings");

const client = new pg.Client({
  user    : settings.user,
  password: settings.password,
  database: settings.database,
  host    : settings.hostname,
  port    : settings.port,
  ssl     : settings.ssl
});
var argument = process.argv[2];
console.log(argument);
client.connect((err) => {
  if(err) {
    return console.error("Connection Error", err);
  }
  client.query("SELECT * FROM famous_people WHERE first_name = $1 OR last_name = $1", [argument], (err, result) =>{
  /*cant put argument , cause its not safe, replace with $1*/
    if (err) {
      return console.error("error running query", err);
    }
    printPeople(result.rows);
    client.end();
  });
});
function printPeople(input){
  console.log("Found " + input.length + " persons by the name of " + argument);
  for(const people of input){
  console.log(" - " + people.id + " " + people.first_name + people.last_name + " ," + " born " + people.birthdate.toString().slice(0,16))
  }
}
