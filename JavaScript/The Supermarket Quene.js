function queueTime(customers, n) {
  
    // Make an array containing n amount of elements, n representing the number of tills, and fill with zeroes
    const tills = new Array(n).fill(0);
  
    // Iterate through the customers 
    for (let time of customers) {
  
    // Find the till that has the least time
    let idx = tills.indexOf(Math.min(...tills));
  
    // Add the time, representing the customer to
    // the till that has the least time
      tills[idx] += time;
    }
  
    // Return the till that has the longest wait time

    return Math.max(...tills);
}