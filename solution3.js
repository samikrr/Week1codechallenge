//prompt window to enter basic salary
let basicSalary=prompt("Enter basic salary");
//prompt window to enter benefits
let benefits=prompt("Enter benefits");

let grossSalary=parseInt(basicSalary)+parseInt(benefits);//parseint converts the gross salary and benefits from strings to numbers
let netSalary=grossSalary-payee()-NHIF()-NSSF();

//function for payee
function payee(){
    if (grossSalary<=288000){
        return (0.1*grossSalary);
    }
    else if(grossSalary > 288000 && grossSalary <=388000){
    return(0.25*grossSalary);
    }
    else if (grossSalary>388000)
    return (0.3*grossSalary);
}

//function for nhif
function NHIF(){
    if(grossSalary<=5999){
        return 150;
    }
    else if(grossSalary>5999 && grossSalary <=7999){
        return 300;
    }
    else if(grossSalary>7999 && grossSalary <=11999){
        return 400;
    }
    else if(grossSalary>11999 && grossSalary<=14999){
        return 500;
    }
    else if(grossSalary>14999 && grossSalary<=19999){
        return 600;
    }
    else if(grossSalary>19999 && grossSalary<=24999){
        return 750;
    }
    else if(grossSalary>24999 && grossSalary<=29999){
        return 850;
    }
    else if(grossSalary>29999 && grossSalary<=34999){
        return 900;
    }
    else if(grossSalary>34999 && grossSalary<=39999){
        return 950;
    }
    else if(grossSalary>39999 && grossSalary<=44999){
        return 1000;
    }
    else if(grossSalary>44999 && grossSalary<=49999){
        return 1100;
    }
    else if(grossSalary>49999 && grossSalary<=59999){
        return 1200;
    }
    else if(grossSalary>59999 && grossSalary<=69999){
        return 1300;
    }
    else if(grossSalary>69999 && grossSalary<=79999){
        return 1400;
    }
    else if(grossSalary>79999 && grossSalary<=89999){
        return 1500;
    }
    else if(grossSalary>89999 && grossSalary<=99999){
        return 1600;
    }
    else if(grossSalary>=100000){
        return 1700;
    }
}

//function for nssf
function NSSF(){
    if (grossSalary<=6000){
        return (0.6*grossSalary);
    }
    else if(grossSalary>6000 && grossSalary<=18000){
        return (0.6*grossSalary);
    }
}
  //function that calls other functions payee,NHIF,NSSF and grossSalary
function netSalaryCalculator(){
    return `Gross salary:${grossSalary}; NetSalary:${netSalary}; Payee:${payee()}; Nhif:${NHIF()}; Nssf:${NSSF()};
    `
}

// function expression which when clicked on html page displays elemts of calculator
const calculate=()=>document.getElementById('calc').innerHTML=netSalaryCalculator();