var database;
var form;
var user;
var peopleCount=0;

function setup() {
  createCanvas(1000,1000);
  var dataabase = firebase.database();
  form = new Form();
  form.display();
  user = new UserData();
  user.getCount();
}

function draw() {
  background("blue")
}