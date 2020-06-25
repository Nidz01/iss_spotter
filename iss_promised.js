const request = require('request-promise-native');

/*
Define and export fetchMyIP. This function should only have one line of code: 
fetch the IP address from the API, using the request function, and return the promise 
that is returned by request.
*/

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

/*
Define and export fetchCoordsByIP. This function retrieves the latitude & longitude for 
our IP address, using the request function, and return the promise 
that is returned by request.
*/

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`https://ipvigilante.com/${ip}`);
};

/*
 * Requests data from api.open-notify.org using provided lat/long data
 * Input: JSON body containing geo data response from ipvigilante.com
 * Returns: Promise of request for fly over data, returned as JSON string
 */
const fetchISSFlyOverTimes = function(body) {
  const { latitude, longitude } = JSON.parse(body).data;
  const url = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`;
  return request(url);
};

/* 
 * Input: None
 * Returns: Promise for fly over data for users location
 */
const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};

module.exports = { nextISSTimesForMyLocation};
