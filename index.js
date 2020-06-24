// Write code in the index.js file which will require and call this function, so that it can be visually tested.

const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const {fetchISSFlyOverTimes} = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});

/*
fetchCoordsByIP('72.141.213.93', (error, geoCoordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('Coordinates are your IP are:' ,  geoCoordinates);
});
*/
/*
fetchISSFlyOverTimes({ latitude: '45.26910', longitude: '-75.75180' }
, (error, passes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('Flyover times of ISS for given coordinates are:' ,  passes);
});
*/


