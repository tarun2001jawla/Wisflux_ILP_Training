//An enum is a group of named constant values. Enum stands for enumerated type.
//An enum can be thought of as a class that has a fixed set of constants.

enum Weekday {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}
function isItWeekend(day: Weekday) {
  let isWeekend: boolean;

  switch (day) {
    case Weekday.Saturday:
    case Weekday.Sunday:
      isWeekend = true;
      break;
    default:
      isWeekend = false;
      break;
  }
  return isWeekend;
}

console.log(isItWeekend(Weekday.Saturday));
console.log(isItWeekend(Weekday.Sunday));
console.log(isItWeekend(Weekday.Monday));
console.log(isItWeekend(4));


//example of enum
enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected
};
const approved =2;


const request = {
    id: 1,
    status: ApprovalStatus.approved,
    description: 'Please approve this request'
};

if (request.status === ApprovalStatus.approved) {
    console.log("send mail to client");
}


//example of enum