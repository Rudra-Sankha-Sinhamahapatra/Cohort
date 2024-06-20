import { measure, once } from "helpful-decorators";

class DateClass {
  private timeZone: string;

  constructor(timeZone: string) {
    this.timeZone = timeZone;
  }

  //@ts-ignore
  @once
  getTime() {
    var d = new Date();
    console.log("Hii from getTime");
    return d.getTime();
  }

  //@ts-ignore
  @measure
  getMonth() {
    var d = new Date();
    return d.getMonth();
  }

  //@ts-ignore
  @measure
  getYear() {
    var d = new Date();
    return d.getFullYear();
  }

  getTimeZone() {
    return this.timeZone;
  }

  //@ts-ignore
  @measure
  expensiveOperation() {
    let ctr = 0;
    const startTime = new Date().getTime();
    console.log("StartTime", startTime);
    for (var i = 0; i < 100000000000; i++) {
      ctr++;
    }
    const EndTime = new Date().getTime();
    console.log(ctr);
    console.log("EndTime:", EndTime);
    console.log("Total time taken:", EndTime - startTime, "ms");
  }
}

const dateObject = new DateClass("IST");

for (let i = 0; i < 5; i++) {
  dateObject.getTime();
}

const response1 = dateObject.getTime();
const response2 = dateObject.getMonth();
const response3 = dateObject.getYear();
const response4 = dateObject.expensiveOperation();

console.log("Time:", response1);
console.log("Month: ", response2);
console.log("Year: ", response3);
