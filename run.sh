#!/bin/bash

# Move to the problem's directory
problem=$1
cd $problem
echo $(pwd)

# Compiles the sol.cpp source code
g++ -std=c++17 sol.cpp -o solution
echo Compiled successfully...
ls -l solution

# Generating output files for provided solution
input_files=`ls in*.txt`
len=${#input_files[@]}
for (( i=0; i<len; i++ )) 
do
    # Usage of xarg command
    ./solution < in$i.txt > res$i.txt
    echo "res$i.txt was generated"
done
echo "All ouputs were generated"

# Finally check differences between both outputs
cd ..
./check.sh $problem