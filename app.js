// Submission effect
document.querySelector('#loan-form').addEventListener('submit',function(e){
  document.querySelector('#results').style.display = 'none';
  document.querySelector('#loader').style.display = 'block';

  setTimeout(calResults,2000);
  e.preventDefault();
});

// Results Calculation
function calResults(){
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
    // Results showing
    document.querySelector('#results').style.display = 'block';
    document.querySelector('#loader').style.display = 'none';
   }else {
    showError('Check Your Entities');
   } 
  
  
}

// Error
function showError(error){
  document.querySelector('#results').style.display = 'none';
    document.querySelector('#loader').style.display = 'none';
  // creating an element
  const errorDiv = document.createElement('div');
  // Getting Elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading'); 

  errorDiv.className= 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Inserting Error above heading
  card.insertBefore(errorDiv,heading);

  // clear error 
  setTimeout(clearError,2000);
}
function clearError(){
  document.querySelector('.alert').remove();

}