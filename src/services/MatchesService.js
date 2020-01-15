const BASE_API = 'http://localhost:3005';

const service = {
  onLogin: async values => {
    try {
      const res = await fetch(`${BASE_API}/login`, { 
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(values)
      });
      const response = await res.json();
      return response
    }
    catch(error) {
      const message = 'Login fail';
      return message
    }
  }
};

export default service;
