//ERROR HANDLING - try/catch
// try = "Try to do this code"
// catch = "If something goes wrong, do this instead"


// Example 1: Basic try/catch
try {
  const user = { name: "John" };
  console.log(user.age.toString()); // ERROR! age doesn't exist
} catch (error) {
  console.log("Oops! Something went wrong:", error.message);
}


// Example 2: Division
const divide = (a, b) => {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return a / b;
  } catch (error) {
    console.log("Error:", error.message);
    return null;
  }
};

console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // Error: Cannot divide by zero!


// Example 3: Fetch with try/catch (VERY COMMON!)
const getUserData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    console.log("User found:", user.name);
  } catch (error) {
    console.log("Failed to get user:", error.message);
  }
};

getUserData();


// Example 4: Multiple operations
const processData = async () => {
  try {
    // Step 1: Get data
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post = await response.json();
    
    // Step 2: Use the data
    console.log("Post title:", post.title);
    
    // Step 3: Do something that might fail
    const upperTitle = post.title.toUpperCase();
    console.log("Uppercase:", upperTitle);
    
  } catch (error) {
    console.log("Something failed:", error.message);
  }
};

processData();


// Example 5: try/catch/finally
// finally = "Do this no matter what (success or error)"
const checkAPI = async () => {
  console.log("Starting API check...");
  
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log("API is working!");
  } catch (error) {
    console.log("API is down:", error.message);
  } finally {
    console.log("Check completed!"); // This ALWAYS runs
  }
};

checkAPI();