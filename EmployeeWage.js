//Welcome to Employee Wage JS programs
{
  const IS_PART_TIME = 1;
  const IS_FULL_TIME = 2;
  const PART_TIME_HOURS = 4;
  const FULL_TIME_HOURS = 8;
  const WAGE_PER_HOUR = 20;
  const NO_OF_WORKING_DAYS=20;
  let empHrs=0;
  //Get Working Hours function
  function getWorkingHours(empCheck) {
    switch (empCheck) {
      case IS_PART_TIME:
        return PART_TIME_HOURS;
      case IS_FULL_TIME:
        return FULL_TIME_HOURS;
      default:
        return 0;
    }
  }
    console.log("1.Employee Attendance\n2.Calculate Daily Wage\n3.Get Working \n4.Calculate Employee wage for Month");
    var prompt=require("prompt-sync")();
    let number=prompt("Enter which UC executed  : ");
switch(number)
{
//UC 1 Check employee absent or present
    case "1":   
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
//UC 2 Calculate Daily Wage
        case "2":
            console.log("---------UC 2--------------------")
            {
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
//UC 3 calculate daily wage with hour
            case "3":
              {
                    let empCheck = Math.floor(Math.random() * 10) % 3;
                    let empHrs = getWorkingHours(empCheck);
                    let empWage = empHrs * WAGE_PER_HOUR;
                    console.log("UC3---> Hours:" + empHrs + "\nEmpWage:" + empWage);
                  }break;
//UC 4 Calculate Monthly Wage
            case "4":
              {
                  for(let day=0;day<NO_OF_WORKING_DAYS;day++)
                  {
                    let empCheck=Math.floor(Math.random()*10)%3;
                    empHrs+=getWorkingHours(empCheck);
                  }
                  let empWage=empHrs*WAGE_PER_HOUR;
                  console.log("Total Hours: "+empHrs+"\nEmp Wage: "+empWage);
              }break;
}
}
