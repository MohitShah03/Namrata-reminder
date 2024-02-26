const signup = async (formData) => {
    try {
      const response = await fetch('http://localhost:8000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        return { success: true };
      } else {
        return { success: false, message: data }; // Return error message from the server
      }
    } catch (error) {
      console.error('Error registering user:', error);
      return { success: false, message: 'An error occurred while registering user.' };
    }
  };
  
  const login = async (formData) => {
    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        return { success: true, user: data }; // Return user data on successful login
      } else {
        return { success: false, message: data }; // Return error message from the server
      }
    } catch (error) {
      console.error('Error logging in:', error);
      return { success: false, message: 'An error occurred while logging in.' };
    }      
  };
  
  export { signup, login };