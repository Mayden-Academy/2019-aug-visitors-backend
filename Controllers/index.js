const validator = require('../Services/ValidationService');
const visitorsService = require('../Services/VisitorsService');
const html_specialchars = require('html-specialchars');

function signInVisitor(req, res) {

    if (validator.validateVisitorSignIn(req.body) === true) {
        let forename =  html_specialchars.escape(req.body.forename);
        let surname = html_specialchars.escape(req.body.surname);
        let company = html_specialchars.escape(req.body.company);
       //call visitor service
        console.log('yay!')
    } else {
        //error message to user
        console.log('boo!')
    }

    let responseData = {
        'success': false,
        'data': '',
        'msg': 'visitor sign in failed'
    };

    //once stored correctly:
    responseData.success = true;
    responseData.msg = 'visitor sign in successful';

    res.json(responseData);
}

module.exports.signInVisitor = signInVisitor;
