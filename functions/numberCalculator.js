const numberCalculator = birthdate => {
  //console.log("Function Input: " + birthdate);
  let date = new Date(birthdate);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  // Calculate Year Sum
  var digitsYear = ("" + year).split("");
  var sumYear = 0;
  for (var w = 0; w < digitsYear.length; w++) {
    sumYear += +digitsYear[w];
  }

  // Calculate Month Sum
  var digitsMonth = ("" + month).split("");
  var sumMonth = 0;
  for (var w = 0; w < digitsMonth.length; w++) {
    sumMonth += +digitsMonth[w];
  }

  // Calculate Day Sum
  var digitsDay = ("" + day).split("");
  //console.log(digitsDay);
  var sumDay = 0;
  for (var w = 0; w < digitsDay.length; w++) {
    sumDay += +digitsDay[w];
  }

  birthdateSum = sumDay + sumMonth + sumYear;
  var digitsBirthDate = ("" + birthdateSum).split("");
  var totalSum = 0;
  for (var w = 0; w < digitsBirthDate.length; w++) {
    totalSum += +digitsBirthDate[w];
  }

  return totalSum;
};

export default numberCalculator;
