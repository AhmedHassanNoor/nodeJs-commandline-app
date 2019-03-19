
//Require https module
const https = require('https');

//Function to print message to console
printMessage = (username, badgeCount, points, language) => {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in ${language}`;
    console.log(message);
}

try {
    get = (username, topic) => {
        // Connect to the API URL (https://teamtreehouse.com/username.json)
        const request = https.get(`https://teamtreehouse.com/${username}.json`, res => {
            if (res.statusCode == 200) {
                let body = '';
                // Read the data
                res.on('data', data => {
                    body += data;
                });
                //when the response ends
                res.on('end', () => {
                    // Parse the data
                    const profile = JSON.parse(body);
                    // Print the data
                    printMessage(username, profile.badges.length, profile.points[topic], topic);
                });
            } else {
                console.log('There has been an error with your request. Please make sure the username exists and the programming language is spelled correctly. eg: ahmedhassannoor JavaScript')
            }

        }).on('error', error => {
            console.error('There has been an error connecting to the url. Please try agian later.')
        });
    }
} catch (error) {
    console.error('asd', error.message);
}

//export the get function
module.exports.get = get;
