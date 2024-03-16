function submitData(name, email) {
    const data = {
      name: name,
      email: email
    };
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    };
  
    return fetch('http://localhost:3000/users', requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const id = data.id;
        document.body.append(id);
      })
      .catch(error => {
        document.body.append(error.message);
      });
  }
  
  // Example usage
  submitData('John Doe', 'john@example.com');
  