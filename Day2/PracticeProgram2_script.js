// Get DOM elements
const loadBtn = document.getElementById('loadBtn');
const loader = document.getElementById('loader');
const errorDiv = document.getElementById('error');
const cardsContainer = document.getElementById('cards');

// Add click event to button
loadBtn.addEventListener('click', fetchUsers); //when button is clicked, run fetchUser function

// Function to fetch users from API
async function fetchUsers() {
  // Step 1: Show loader, hide error and cards
  loader.classList.add('show'); //classList is a property to add, remove or chech CSS classes on HTML elements. here 'loader' html class (<div id ="loader" class="loader-container" ></div> becomes <div id="loader" class="loader-container show"></div>) (This is for showing spinning loader)
  errorDiv.classList.remove('show'); //remove 'show' class from error(hides it) 
  cardsContainer.innerHTML = ''; //clear all cards (empty the container) (This will clear old cards before loading new ones)

  try {
    // Step 2: Fetch data from API
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    // Step 3: Check if successful
    if (!response.ok) { //check if request is not successful
      throw new Error('Failed to fetch users');//creates an error ie jump to catch
    }

    // Step 4: Convert response to JSON
    const users = await response.json(); //convert raw data into js object/array  (await is used to wait for conversion to complete)

    // Step 5: Hide loader
    loader.classList.remove('show'); //remove a class - show (ie data has loaded and we dont need spinner anymore, so remove)

    // Step 6: Display cards
    displayCards(users); //call another function to create cards with the user data. Passes the user array to that funciton

  } catch (error) {
    // Hide loader
    loader.classList.remove('show'); //hide loader
    
    // Show error message
    errorDiv.textContent = 'Error: ' + error.message; //set error text
    errorDiv.classList.add('show'); //show error message
    
    console.error('Error:', error); //Log error in console
  }
}

// Function to display users as cards
function displayCards(users) {
  users.forEach(user => {
    // Create card div
    const card = document.createElement('div');
    card.className = 'card'; //add css class to style on div card
    
    // Add HTML content to card
    card.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <p><strong>City:</strong> ${user.address.city}</p>
      <p><strong>Company:</strong> ${user.company.name}</p>
    `;
    
    // Add card to container
    cardsContainer.appendChild(card); //adds the card to the page
  });
}

// Auto-load users when page loads
window.addEventListener('load', fetchUsers); //when page finishes loading, automatically call fetchUser(). Users see data immediately without clicking button