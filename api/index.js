const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function(request, response) {
    let theDate = new Date().toISOString();
    console.log(theDate + ' GET /');
    response.set('Access-Control-Allow-Origin', '*');
    response.status(200).send('Hola chicos !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
});

app.post('/save', urlencodedParser, function(request, response) {
    let code = 200;
    let secureResponse = 'Holas!'
    let theDate = new Date().toISOString();
    console.log(`${theDate} POST /save ${request.body.email_address || ':)'}`);

    try {
        if (request.body.email_address) {
            secureResponse = `${secureResponse} ${request.body.email_address}`
        } else {
            throw 'Falta el email address';
        }
    } catch(e) {
        code = 500;
        secureResponse = 'hubo un error';
        console.log(e);
    }

    response.set('Access-Control-Allow-Origin', '*')
    return response.status(code).send(secureResponse);
});

app.listen(9000, () => console.log('Server is running...'));
