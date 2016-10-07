# BigData_TP1

## Overview 

Implementation of map and reduce algorithm on the example of counting words occurances in a text.

## Map and reduce algorithm theorie

The algorithm works as follow:
- we give it in input a text
- the function map counts the words occurances in the part of the text given in parameter
- the function shuffle and sort regroups results of all map functions and orders results by alphabetical order
- the function reduce join the results and counts for each words all occurances in all the text
- results of the different functions are displayed  

## This map and reduce implementation

Here, we test this algorithm by making only one call of map function on all the text. We have only one result for map function, in function suffle and sort, there isn't a regroup of results but only an order of the table. And s,o in the reduce function, there isn't a real join of results. 

## Test the project

Download the project as zip, unzip it and open map_reduce.html in your favorite browser. 
