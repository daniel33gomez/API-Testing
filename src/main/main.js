const axios = require('axios').default;

const url = 'https://www.wrike.com/api/v4'
const config = {
    headers: { 'Authorization': `Bearer ${process.env.WRIKE_TOKEN}`}
};

// Get account info
axios.get(`${url}/account`, config)
    .then(response => {
        console.log(response.data);
    }).catch(error => {
        console.log(error);
})

// Get folders and projects
axios.get(`${url}/folders`, config)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
});
