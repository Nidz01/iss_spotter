// Write code in the index.js file which will require and call this function, so that it can be visually tested.

const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});

const ip = '72.141.213.93';

fetchCoordsByIP((ip, data) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Coordinates by IP are:' , ip);
});


