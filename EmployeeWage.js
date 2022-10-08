//Welcome to Employee Wage JS programs
{
    console.log("1.UC1");
    var prompt=require("prompt-sync")();
    let number=prompt("Enter which UC executed  : ");
switch(number)
{
    case "1":
    
    //UC 1 Check employee absent or present
    const IS_PRESENT=1
    const IS_ABSENT=0
    let empCheck=Math.floor(Math.random()*10)%2;
    if(empCheck==IS_PRESENT){
    console.log("Employee is Present");
    }
    else{
    console.log("Employee is Absent");
    }
        break;
   
}
}