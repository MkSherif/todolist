document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
  
      if (!username || !email || !password) {
      alert("Please fill in all fields.");
    } else {
      
      alert("Signup successful!");

      window.location.href="Todolist.html";
    }
  });
  
 