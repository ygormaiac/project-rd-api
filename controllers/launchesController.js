const launchesRepository = require('../repository/launchesRepository');

async function getAllLaunches(req, res, next) {
  try {
    const getAll = await launchesRepository.getAll();

    res.status(200).json(getAll);
  } catch (e) {
    next(e);
  }
}

async function getLastestLaunches(req, res, next) {
  try {
    const getLastest = await launchesRepository.getLastestLaunches();

    res.status(200).json(getLastest);
  } catch (e) {
    next(e);
  }
}

async function getNextLaunches(req, res, next) {
  try {
    const getNext = await launchesRepository.getNextLaunches();

    res.status(200).json(getNext);
  } catch (e) {
    next(e);
  }
}

async function getUpComingLaunches(req, res, next) {
  try {
    const getUpComing = await launchesRepository.getUpComingLaunches();

    res.status(200).json(getUpComing);
  } catch (e) {
    next(e);
  }
}

async function getPastLaunches(req, res, next) {
  try {
    const getPast = await launchesRepository.getPastLaunches();

    res.status(200).json(getPast);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getAllLaunches,
  getLastestLaunches,
  getNextLaunches,
  getUpComingLaunches,
  getPastLaunches
}
