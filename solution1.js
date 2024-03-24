let studentMarks=prompt("Enter student marks");
//obtain studentMarks from window and print marks in the input which responds with an alert. 

if( studentMarks >= 80 && studentMarks <=100){
    alert ("Your grade is: A"); 
}
else if(studentMarks >= 60 &&studentMarks < 80){
    alert ("Your grade is: B");
}
else if(studentMarks >= 49 && studentMarks < 60){
    alert ("Your grade is: C");
}
else if(studentMarks >= 40 && studentMarks < 50){
    alert ("Your grade is: D");
}  
else if(studentMarks >= 0 && studentMarks < 40){
    alert ("Your grade is: E");
}
else {
    alert ("Invalid input");
}