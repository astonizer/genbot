#!/bin/bash

echo "Comparing results"
out_files=(`ls out*.txt`)
res_files=(`ls res*.txt`)

tot=${#out_files[@]}

for(( i=0; i<tot; i++ ))
do
    cmp ${out_files[i]} ${res_files[i]}
done