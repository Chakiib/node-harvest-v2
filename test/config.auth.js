let Harvest = require('../src/Harvest');

const config = {
    account_ID: '',
    access_token: '',
    user_agent: ''
};

const harvest = new Harvest(config);

module.exports = {
    config,
    harvest
}