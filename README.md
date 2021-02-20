## genbot

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/astonizer/genbot/graphs/commit-activity)
<br>
Generate c++ templates and test case files for competitive programming contests and also test your solutions against them using genbot.

# Usage

1.  Clone this repo and `cd` into it.
2.  Run `node script PLATFORM CONTEST_URL`
    where CONTEST_URL is the url of the page which displays all problems.
3.  Directory will be created for each problem with its own testcase and cpp files.
    e.x. For codeforces, it would be A, B, etc.
4.  Run `./run.sh A` in the root directory after completion of solution to test your solution.
    <br><br><br>
    Parsing problems<br>
    <img src="https://github.com/astonizer/genbot/blob/master/assets/parse-problems.gif" width="700" height="350" />

        <br>
        Testing incorrect solution<br>
        <img src="https://github.com/astonizer/genbot/blob/master/assets/sol-fail.gif" width="700" height="350" />

    <br><br>
    Testing correct solution<br>
    <img src="https://github.com/astonizer/genbot/blob/master/assets/sol-pass.gif" width="700" height="350" />

        <br>

#### Tip : Edit `template.cpp` as per your convenience

#### Note : Functionality only for codeforces contests. More functionality will be added soon.
