const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080'
      : 'https://reactflix-ahssf.herokuapp.com';

export default { 
    URL,
};