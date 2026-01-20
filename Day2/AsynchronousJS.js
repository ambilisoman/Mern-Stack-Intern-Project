// Async JavaScript:
// Promises - "I'll give you data in 2 seconds"
// async/await - Cleaner way to wait for promises
// Fetch API - Get real data from the internet

// 1. PROMISES - "I promise to give you data later"
const getWeather = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const weather = "Sunny";
      resolve(weather); // Success! Here's the data
    }, 2000); // Wait 2 seconds
  });
};

// Using the promise
getWeather()
  .then((weather) => console.log("Weather is:", weather))
  .catch((error) => console.log("Error:", error));


// 2. ASYNC/AWAIT - Cleaner way to write promises
const checkWeather = async () => {
  console.log("Checking weather...");
  const weather = await getWeather(); // Wait for the promise
  console.log("Weather is:", weather);
};

checkWeather();


// 3. FETCH API - Get real data from internet
const getUsers = async () => {
  try {
    // Fetch data
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    // Convert to JavaScript object
    const users = await response.json();
    
    // Use the data
    console.log("First user:", users[0].name);
    console.log("Total users:", users.length);
    
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

getUsers();