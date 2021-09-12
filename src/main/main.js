const axios = require('axios').default;

const url = 'https://www.wrike.com/api/v4'
const config = {
    headers: { 'Authorization': `Bearer ${process.env.WRIKE_TOKEN}`}
};

axios.get(`${url}/folders`, config)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
});

axios.get(`${url}/account`, config)
    .then(response => {
        console.log(response.data);
    }).catch(error => {
        console.log(error);
    })