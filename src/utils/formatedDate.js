export function getFormattedDate() {
  const today = new Date();

  // Get month names
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get day and append appropriate suffix (st, nd, rd, th)
  const day = today.getDate();
  let suffix = "th";

  if (day === 1 || day === 21 || day === 31) suffix = "st";
  else if (day === 2 || day === 22) suffix = "nd";
  else if (day === 3 || day === 23) suffix = "rd";

  const month = months[today.getMonth()];

  return `${month} ${day}${suffix}`;
}

console.log(getFormattedDate()); // e.g., "October 18th"
