const express = require('express');
const router = express.Router();
const data = require('./pr_data');
const users = data.users;


// Route to login
router.post('/auth', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
        for(let i = 0; i < users.length; i++) {
            if(users[i].username === username && users[i].password === password) {
                //Send Auth Token
                request.status(200);
                request.send("Correct Auth");
                response.end();
            }
        }

        response.send('Incorrect Username and/or Password!');
        response.end();
        
		// Querry to search for the pair of username and password
		/*connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			//if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				//request.session.loggedin = true;
				//request.session.username = username;
				// Redirect to home page
				//response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		})*/
	} else {
        response.status(401);
		response.send('Please enter Username and Password!');
		response.end();
	}
});

module.exports = router;