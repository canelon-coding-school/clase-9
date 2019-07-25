const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const jsonParser = bodyParser.json();
const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false })

let corsOptions = {
    optionsSuccessStatus: 200,
    origin: 'http://localhost'
};

app.use(cors({ origin: false }));

app.get('/', function(request, response) {
    console.log(new Date() + ' GET /');
    response.status(200).send('hola chicos');
});

app.post('/save', urlencodedParser, function(request, response) {
    let code = 200;
    let secureResponse = 'Holas!'
    try {
        console.log(`${new Date()} POST /save ${request.body.email_address || ':)'}`);
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

    return response.status(code).send(secureResponse);
});

app.listen(9000, () => console.log('Server is running...'));
