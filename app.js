// Submission effect
document.querySelector('#loan-form').addEventListener('submit',calResults);

// Results Calculation
function calResults(e){
  // UI Variables
  const amount = document.querySelector('#amount');
  const interest = document.querySelector('#interest');
  const years = document.querySelector('#years');
  const monthlyPayment = document.querySelector('#monthly-payment');
  const totalPayment = document.querySelector('#total-payment');
  const totalInterest = document.querySelector('#total-interest');

  const principal = parseFloat(amount.value);
  const calInterest = parseFloat(interest.value)/100/12;
  const calPayments = parseFloat(years.value)*12; 

  // Compute Monthly Payments
   const x = Math.pow(1+calInterest,calPayments);
   const monthly = (principal*x*calInterest)/(x-1);

   if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly*calPayments).toFixed(2);
    totalInterest.value = ((monthly*calPayments)-principal).toFixed(2);
   }else {
    
   }
  
  e.preventDefault()

}
