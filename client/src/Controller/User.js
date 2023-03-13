export function verifuser(identifiant,password) {
    
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();
    data.append('identifiant',`${identifiant}`);
    data.append('password',`${password}`)

    var config = {
    method: 'get',
    url: 'http://localhost:5000/api/userRoutes/unUser',
    headers: { 
        'Content-Type': 'application/json', 
    ...data.getHeaders()
    },
    data : data
    };

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
}