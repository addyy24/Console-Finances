var finances = [
  ['Jan-2010', 867884],
  // ... (your complete dataset here)
  ['Feb-2017', 671099],
];

// Financial Analysis
console.log("Financial Analysis");
console.log("------------------");

// Total number of months included in the dataset
var totalMonths = finances.length;
console.log("Total Months: " + totalMonths);

// Net total amount of Profit/Losses over the entire period
var totalAmount = finances.reduce((sum, record) => sum + record[1], 0);
console.log("Total: $" + totalAmount);

// Calculate the changes in Profit/Losses from month to month
var changes = [];
for (var i = 1; i < finances.length; i++) {
  changes.push(finances[i][1] - finances[i - 1][1]);
}

// Average of the changes in Profit/Losses over the entire period
var averageChange = changes.reduce((sum, change) => sum + change, 0) / (totalMonths - 1);
console.log("Average Change: $" + averageChange.toFixed(2));

// Greatest increase in Profit/Losses (date and difference in amounts)
var maxIncrease = Math.max(...changes);
var maxIncreaseIndex = changes.indexOf(maxIncrease);
var maxIncreaseDate = finances[maxIncreaseIndex + 1][0];
console.log("Greatest Increase in Profits/Losses: " + maxIncreaseDate + " ($" + maxIncrease + ")");

// Greatest decrease in Profit/Losses (date and difference in amounts)
var maxDecrease = Math.min(...changes);
var maxDecreaseIndex = changes.indexOf(maxDecrease);
var maxDecreaseDate = finances[maxDecreaseIndex + 1][0];
console.log("Greatest Decrease in Profits/Losses: " + maxDecreaseDate + " ($" + maxDecrease + ")");

