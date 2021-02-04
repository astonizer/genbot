const cheerio = require('cheerio');
const fs = require('fs');
const axios = require('axios');

// Fetching all testcases of problem 
let fetchAllTestcasesOfProblem = (directory, html) => {
    fs.copyFileSync(`${directory}/../template.cpp`, `${directory}/sol.cpp`);
    data = [];
    const $ = cheerio.load(html);
    $('div.part section pre').each((id, element) => {
        if(id >= 8) {
            if(id % 2) {
                data[id] = {
                    ...data[id], 
                    output: $(element).text()
                };
            } else {
                data[id] = {
                    ...data[id], 
                    input: $(element).text()
                };
            }
        }
    });
    console.log(`Creating input and output files for ${directory.substring(2)}...`);
    data.forEach((testCase, id) => {
        fs.writeFile(`${directory}/in${id}.txt`, testCase.input, error => {
            if(error) {
                console.log(error);
            }
            console.log(`Input file ${directory}/in${id}.txt was saved`);
        });
        fs.writeFile(`${directory}/out${id}.txt`, testCase.output, error => {
            if(error) {
                console.log(error);
            }
            console.log(`Output file ${directory}/out${id}.txt was saved`);
        });
    });
}

// Creating directories for each problem
let fetchAllProblemsOfContest = (problem_url) => {

    // Create directory if not already exists
    let directory = `./${problem_url[problem_url.length-1].toUpperCase()}`;
    if(!fs.existsSync(directory))
        fs.mkdirSync(directory);
        
    // Create testcase files of given problem
    axios.get(problem_url)
        .then(response => {
            fetchAllTestcasesOfProblem(directory, response.data);
        })
        .catch(error => {
            console.log(error);
        })
};

// Processing all the available problems seperately
let fetchProblemsListFromAtcoderContest = (html) => {
    const $ = cheerio.load(html);
    console.log("Parsing problems from contest");
    $('td a').each((id, problem) => {
        if(id%2) {
            let problem_url = 'https://atcoder.com' + $(problem).attr('href');
            console.log(problem_url);
            fetchAllProblemsOfContest(problem_url);
        }
    })
};

module.exports = fetchProblemsListFromAtcoderContest;