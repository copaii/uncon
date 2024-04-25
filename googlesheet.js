// const scriptURL = 'https://script.google.com/macros/s/AKfycbzgdarTjO3qiVEZ8q7vI76dgCZgNdSLOpNQd7Pw_8hkMTaPj1D0p8skmU4U9qBhr-DdKA/exec';

// const form = document.getElementById('contactForm'); 

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//   .then(response => alert("Thank you! your form is submitted successfully." ))
//   .then(() => { window.location.reload(); })
//   .catch(error => console.error('Error!', error.message))
// })


const scriptURL = 'https://script.google.com/macros/s/AKfycbzgdarTjO3qiVEZ8q7vI76dgCZgNdSLOpNQd7Pw_8hkMTaPj1D0p8skmU4U9qBhr-DdKA/exec';
const form = document.getElementById('contactForm');
const submitModal = document.getElementById('submitModal');
const resultModal = document.getElementById('myModal');
const span = document.getElementsByClassName("close")[0];

form.addEventListener('submit', e => {
  e.preventDefault();
  submitModal.style.display = "block"; // Show the submission in progress modal
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    submitModal.style.display = "none"; // Hide the submission in progress modal
    resultModal.style.display = "block"; // Show the result modal
    setTimeout(() => { 
      resultModal.style.display = "none"; // Hide the result modal after 3 seconds
      window.location.reload(); // Reload the page
    }, 3000);
  })
  .catch(error => {
    submitModal.style.display = "none"; // Hide the submission in progress modal in case of error
    console.error('Error!', error.message);
  });
});

// Close the result modal when the user clicks on the close button (×)
span.onclick = function() {
  resultModal.style.display = "none";
}

// Close the result modal when the user clicks outside of it
window.onclick = function(event) {
  if (event.target == resultModal) {
    resultModal.style.display = "none";
  }
}