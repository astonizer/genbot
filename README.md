## genbot

Genreate c++ templates and test case files for competitive programming contests using genbot.

# Usage
1. Clone this repo and `cd` into it.
2. Run `node script CONTEST_URL`
    where CONTEST_URL is the url of the form "https://codeforces.com/contest/XXXX:"
3. Directory will be created for each problem with its own testcase and cpp files.
    e.x. For codeforces, it would be A, B, etc.
4. Run `code A/sol.cpp` to open the corresponding solution file and so for the others.
5. Run `./run.sh A` after completion of solution to compare your results.


Tip : Edit `template.cpp` as per your convenience

Note : Functionality only for codeforces contests. More functionality will be added soon.