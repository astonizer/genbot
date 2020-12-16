#!/bin/bash

echo
echo "Comparing results"
cd $1
echo $(pwd)
out_files=(`ls out*.txt`)
res_files=(`ls res*.txt`)

tot=${#out_files[@]}

echo
for(( i=0; i<tot; i++ ))
do
    diff ${out_files[i]} ${res_files[i]} && echo "Test #$i passed" || echo "Test #$i failed"
done