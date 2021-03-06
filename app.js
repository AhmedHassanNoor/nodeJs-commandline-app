// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

const profile = require('./profile');
const users = process.argv.slice(2);
profile.get(users[0], users[1]);
