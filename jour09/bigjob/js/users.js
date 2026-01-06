load_users();
const myusers = JSON.parse(localStorage.getItem("users")) || [];
localStorage.removeItem("users");