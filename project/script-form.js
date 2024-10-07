 document.getElementById("form").addEventListener("submit",function(event) {
    event.preventDefault(); 
  
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    let password =document.getElementById("password").value;
    let number = document.getElementById("number").value;
  
    
    if (name === '' || email === '' || password === ''|| number === '') {
      alert('Please fill in all fields');
      return;
    }
  
    alert(`Form submitted! \nName: ${name}\nEmail: ${email}`);
});
  
  