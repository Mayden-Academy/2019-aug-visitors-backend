const validator = require('../Services/ValidationService');
const html_specialchars = require('html-specialchars');

function signInVisitor(req, res) {

    if (validator.validateVisitorSignIn(req.body) === true) {
        //store in db
    } else {
        //error message to user
    };

    html_specialchars.escape(visitorInput);

    let forename = req.body.forename;
    let surname = req.body.surname;
    let company = req.body.company;

    let responseData = {
        'success': false,
        'data': '',
        'msg': 'visitor sign in failed'
    };

    console.log('hi')

    //call validationService on inputs
    //returns bool
    //happy path first
    //convert chars
    //call store visitor in visitors service (uses db service in visitors service)

    //once stored correctly:
    responseData.success = true;
    responseData.msg = 'visitor sign in successful';

    res.json(responseData);
}

module.exports.signInVisitor = signInVisitor;
