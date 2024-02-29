// function getMonthName(month){
//     month--;
//     let months = [
//         "jan","feb","mar","apr","may","jun","july"
//         ,"aug","sept","oct","nov","dec"
//     ]

//     if(months[month]){
//         return months[month];
//     }
//     else{
//         throw new Error("this is not expected value");
//     }
// }

// try{
//     const month_no =12;
//     const mymonth  = getMonthName(month_no);
//     console.log(mymonth);

// }
// catch(e){
//     mymonth = "unknown";
//     console.error(e.message);
// }

function f() {
    try {
      throw "bogus";
    } catch (e) {
      console.log('caught inner "bogus"');
      // This throw statement is suspended until
      // finally block has completed
      throw e;
    } finally {
      return false; // overwrites the previous "throw"
    }
    // "return false" is executed now
  }
  
  try {
    console.log(f());
  } catch (e) {
    // this is never reached!
    // while f() executes, the `finally` block returns false,
    // which overwrites the `throw` inside the above `catch`
    console.log('caught outer "bogus"');
  }
  
  // Logs:
  // caught inner "bogus"
  // false
  
  