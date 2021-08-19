var Student1 , student2
function setup() {
  createCanvas(400,400);
  student1 = new Student("billy",15,9)
  student2 = new Student("bob",15,9)
}

function draw() 
{
  background(30);
  student1.log();
  student2.log();
}