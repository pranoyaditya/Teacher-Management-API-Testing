const newman = require('newman');
// require('dotenv').config();

newman.run({
    collection: './test_collection/teacher_management_apis.json', // Collection URL from a public link or the Postman API can also be used
    environment: './test_collection/assignment_env.json',
    reporters: ['htmlextra'],
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html',
        }
    }
}, function(err) {
    if(err) {
        throw err;
    }
    console.log("Collection run successfully!");
})