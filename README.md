# BigData_TP1

## Overview 

Implementation of map and reduce algorithm on the example of counting words occurances in a text.

## Map and reduce algorithm

The algorithm works as follow:
- we give it in input a text
- the function map counts the words occurances in the part of the text given in parameter
- the function shuffle and sort regroups results of all map functions and orders results by alphabetical order
- the function reduce join the results and counts for each words all occurances in all the text
- results of the different functions are displayed  

## Test the project

Download the project, unzip it and open map_reduce.html in your favorite browser. 
