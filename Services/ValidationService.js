var html_specialchars = require('html-specialchars');

let validateVisitorSignIn = (visitorInput) => {

    checkInputProvided(visitorInput);
    checkLength(visitorInput);
    html_specialchars.escape(visitorInput);

   //if there is post data then validate:
    //call htmlspecialchars()
};

let checkInputProvided = (visitorInput) => {

    return (typeof visitorInput.forename == 'string' && typeof visitorInput.surname == 'string')

};

let checkLength = (visitorInput) => {

    return (visitorInput.forename.length >= 1 && visitorInput.forename.length <= 50 && visitorInput.surname.length >= 1 && visitorInput.surname.length <= 50 && visitorInput.company.length >= 1 && visitorInput.company.length <= 50)

};



module.exports.validateVisitorSignIn = validateVisitorSignIn;