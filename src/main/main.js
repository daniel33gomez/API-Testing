const axios = require('axios').default;
require('dotenv').config()

const url = 'https://www.wrike.com/api/v4'
const config = {
    headers: { 'Authorization': `Bearer ${process.env.WRIKE_TOKEN}`}
};

axios.get(`${url}/folders`, config)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
});

axios.get(`${url}/account`, config)
    .then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.log(error);
    })