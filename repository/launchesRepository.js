const axios = require('axios');

async function getAll() {
  const results = await axios.get('https://api.spacexdata.com/v5/launches');
  return await results.data;
}

async function getLastestLaunches() {
  const results = await axios.get('https://api.spacexdata.com/v5/launches/latest');
  return await results.data;
}

async function getNextLaunches() {
  const results = await axios.get('https://api.spacexdata.com/v5/launches/next');
  return await results.data;
}

async function getUpComingLaunches() {
  const results = await axios.get('https://api.spacexdata.com/v5/launches/upcoming');
  return await results.data;
}

async function getPastLaunches() {
  const results = await axios.get('https://api.spacexdata.com/v5/launches/past');
  return await results.data;
}

module.exports = {
  getAll,
  getLastestLaunches,
  getNextLaunches,
  getUpComingLaunches,
  getPastLaunches
}
