//function speeddetector to calculte demerit points and display 
function speeddetector(){
    let speed=document.getElementById('top-input').value; //obtain speed value from input id top-input
    let points=(speed-70)/5; //calculate speed points,5km/s for every speed above 70km

    //if points is === 0 or below it should display 'Ok'
    if(points<=0){
        return document.getElementById('display').innerHTML ="OK";
    }
    //if points is above 0 to 12 display the points
    else if (points > 0 && points <= 12){
        return document.getElementById('display').innerHTML =`Points:${Math.floor(points)}`;
    }
    //if points is more than 12 display license suspended
    else if(points > 12 ) {
        return document.getElementById('display').innerHTML = "License suspended";
    }
    
}  
//this is an event listener for click on the button id which onclick calls the function speeddetector
    document.getElementById('btn').addEventListener('click' ,speeddetector );