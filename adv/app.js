// Unions
var value;
value = "Hello World";
value = 23;
// value = true; // Not Allowed
function printId(id) {
    console.log("ID", id);
}
;
var user = {
    name: "Ali",
    age: 23,
};
// console.log(user);
// Literal Types
var stat;
stat = "success"; // correct
// stat = "failed";   // error
function handleRequest(state) {
    console.log("Request is ", state);
}
;
// console.log(handleRequest("pendding"));
// ENUMS
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
;
var dir = Direction.South;
console.log(dir); // 0
var Colors;
(function (Colors) {
    Colors["Red"] = "RED";
    Colors["Green"] = "GREEN";
    Colors["Blue"] = "BLUE";
})(Colors || (Colors = {}));
;
var c = Colors.Blue;
var user1 = { name: "Raza" };
var user2 = { name: "Ali", age: 22 };
console.log(user1);
console.log(user2);
