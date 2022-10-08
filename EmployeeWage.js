//Welcome to Employee Wage JS programs
{
    console.log("1.Employee Attendance\n2.Calculate Daily Wage");
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
        case "2":
    
            console.log("---------UC 2--------------------")
            const IS_PART_TIME=1;
            const IS_FULL_TIME=2;
            const WAGE_PER_HR=20;
            {
                let empHrs=0;
                let empCheck=Math.floor(Math.random()*10)%3;
                switch(empCheck){
                    case 1:
                        empHrs=4;
                        break;
                        case 2:
                            empHrs=8;
                            break;
                            case 0:
                        empHrs=0;
                        break;
                }
                let empWage=empHrs*WAGE_PER_HR;
                console.log("UC2-----EmpWage: "+empWage);
            }
            break;
}
}