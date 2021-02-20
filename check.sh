#!/bin/bash

cd $1
echo
echo "Comparing results"
echo $(pwd)
out_files=(`ls out*.txt`)
res_files=(`ls res*.txt`)

tot=${#out_files[@]}

echo
for(( i=0; i<tot; i++ ))
do
    diff ${out_files[i]} ${res_files[i]} && echo -e "\033[32:32mTest #$i passed\033[0m" || (echo && cmp ${out_files[i]} ${res_files[i]} || echo -e "\033[31:40mTest #$i failed\033[0m")
done