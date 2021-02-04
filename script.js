#!/usr/bin/env node

const axios = require('axios');
const codeforces = require('./platforms/codeforces');
const codechef = require('./platforms/codechef');
const atcoder = require('./platforms/atcoder');

// Accessing the contest platform
const contest_platform = process.argv[2];

// Accessing the contest url from the terminal
const contest_url = process.argv[3];

// Main entry
// Checks correctness of url provided
axios.get(contest_url)
    .then(response => {
        switch(contest_platform) {
            case 'codeforces':
                codeforces(response.data);
                break;
            case 'codechef':
                codechef(response.data);
                break;
            case 'atcoder':
                atcoder(response.data);
                break;
            default:
                throw Error(contest_platform+ ' is not a valid platform');
        }
    })
    .catch(error => {
        console.log(error);
    });