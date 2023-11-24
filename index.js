const clicks = require('./clicks.json');

function filterClicks(clicks) {
    // Create an object to store the result set, grouped by IP and period
    const resultSet = {};
  
    // Count the number of clicks for each IP
    const clickCount = {};
  
    // Iterate through each click
    clicks.forEach(click => {
      const ip = click.ip;
      const timestamp = new Date(click.timestamp);
      const period = timestamp.getHours();
  
      // Check if the click should be included in the result set
      if (!clickCount[ip]) clickCount[ip] = 0;
  
      if (clickCount[ip] < 10) {
        if (!resultSet[ip]) resultSet[ip] = {};
  
        if (!resultSet[ip][period] || click.amount > resultSet[ip][period].amount || (click.amount === resultSet[ip][period].amount && timestamp < new Date(resultSet[ip][period].timestamp))) {
          resultSet[ip][period] = { ...click };
        }
  
        clickCount[ip]++;
      }
    });
  
    // Flatten the result set object into an array
    const resultArray = Object.values(resultSet)
      .map(periodClicks => Object.values(periodClicks))
      .flat();
  
    return resultArray;
  }
  
  // Example usage with your provided data
  
  const result = filterClicks(clicks);
  console.log(result);

  module.exports = filterClicks ;
  