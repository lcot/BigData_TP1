//function treatment gets the text in vtext tag and calls input function 
function treatment(){
//we get the content of markup "vtext" wich is the text to treat
var bloctext = document.getElementById("vtext");
var vtext = bloctext.value;

input(vtext);
}

//function treatment2 calls the function input with a default text
function treatment2(){

var vtext = "To be, or not to be: that is the question:	Whether ’tis nobler in the mind to suffer" + 
"The slings and arrows of outrageous fortune," +  
"Or to take arms against a sea of troubles," + 	
"And by opposing end them? To die: to sleep; " + 
"No more; and, by a sleep to say we end " + 	
"The heart-ache and the thousand natural shocks " + 
"That flesh is heir to, ’tis a consummation	" + 
"Devoutly to be wish’d. To die, to sleep;	" + 
"To sleep: perchance to dream: ay, there’s the rub;" +  
"For in that sleep of death what dreams may come " + 
"When we have shuffled off this mortal coil,	" + 
"Must give us pause. There’s the respect	" + 
"That makes calamity of so long life;	" + 
"For who would bear the whips and scorns of time, " +  
"The oppressor’s wrong, the proud man’s contumely, " + 
"The pangs of dispriz’d love, the law’s delay,	" + 
"The insolence of office, and the spurns	" + 
"That patient merit of the unworthy takes,	" + 
"When he himself might his quietus make	" + 
"With a bare bodkin? who would fardels bear, " + 
"To grunt and sweat under a weary life,	" + 
"But that the dread of something after death," +  
"The undiscover’d country from whose bourn	" + 
"No traveller returns, puzzles the will,	" + 
"And makes us rather bear those ills we have	" + 
"Than fly to others that we know not of?	" + 
"Thus conscience does make cowards of us all; " +  
"And thus the native hue of resolution	" + 
"Is sicklied o’er with the pale cast of thought, " + 	
"And enterprises of great pith and moment	" + 
"With this regard their currents turn awry,	" + 
"And lose the name of action. Soft you now!	" + 
"The fair Ophelia! Nymph, in thy orisons	" + 
"Be all my sins remember’d.";

input(vtext);
}

//input function call the function map, then the function shuffleAndSort and then the function reduce
function input(vtext){
var i=0;
var tab = new Array();
var tabResult =  new Array()
var string="";
var j=0;

	// we call the function map. The function return a table. Then we display the result of map function.
	tabResult = Map(vtext);
	string="";
	for(i=0; i<tabResult.length; i++){
		string = string + tabResult[i][j]+" [";
		for(j=1; j<tabResult[i].length; j++){
			if(j>1) string = string +", "+tabResult[i][j];
			else string = string +tabResult[i][j];
		}
		string = string + "]<br>";
		j=0;
	}
	
	document.getElementById("resultMap").innerHTML=string;
	
	shuffleAndSort(tabResult);
	
	tabResult=Reduce(tabResult);
	
	string="";
	for(i=0; i<tabResult.length; i++){
		string = string + tabResult[i][0]+" [" + tabResult[i][1] + "]<br>";
	}
	console.log(tabResult[0][0].charCodeAt(0));
	document.getElementById("resultReduce").innerHTML=string;
	
}


//counts the number of occurence for each word in the text given in parameter and return the result as a table.
function Map(string){
	var tab = new Array();
	var word="";
	var i=0;
	var j=0;
	var k=0;
	var l=0;
	var cpt=-1;
	var tabResult = new Array();
	
	//we cut the string in words, we define that a word end by a ".", a ",", a new ligne or a space. 
	for(i=0; i<string.length; i++){
	if((string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90) || (string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122)){
		word=word+string.charAt(i);
	}else{
		word=word.replace(/<br>/g, "");
		word=word.toLowerCase();
		
		if(word!="" && word!=" ")
		{
			for(l=0; l<tabResult.length; l++){
				if(word.replace(/<br>/g, "")==tabResult[l][0]){
					cpt=l;
				} 
			}
			
		//if the word isn't already in the result table of word, we add it
		if(cpt==-1){
			tabResult[k]=new Array();
			
			tabResult[k][0]=word;
			tabResult[k][1]=1;
			k++;
			
		}else{//if the word is already in the result table of word, we add the value for the word
			tabResult[cpt][tabResult[cpt].length]=1;
			cpt=-1;
			
		}
		
			word="";
		}
	}
	}
	
	//if the last word isn't empty, we verify that the word isn't already in the result table of word
	if(word!=""){
		for(j=0; j<tab.length; j++){
			if(word==tabResult[j][0]) cpt=j;
		}
		//if the word isn't already in the result table of word, we add it and we put one occurance in
		//the table
		if(cpt==-1){
			tabResult[k]=new Array();
			tabResult[k][0]=word.replace(/<br>/g, "");
			tabResult[k][1]=1;
			k++;
			
		}else{//if the word is already in the result table of word, we add the value for the word
			tabResult[cpt][tabResult[cpt].length]=1;
			cpt=-1;
			
		}
		word="";
	}

	//we return the result tab with words and their occurance in the line
	return tabResult;
}
	
	
//function shuffleAndSort wich order the result words of map on each lines by alphabetical order 
function shuffleAndSort(tabResult){
	var i=0;
	var j=0;
	var equal=0;
	
	//order the table by alphabetical order
	tabResult.sort();

	//display the result 
	string="";
	for(i=0; i<tabResult.length; i++){
		string = string + tabResult[i][j]+" [";
		for(j=1; j<tabResult[i].length; j++){
			if(j>1) string = string +", "+tabResult[i][j];
			else string = string +tabResult[i][j];
		}
		string = string + "]<br>";
		j=0;
	}
	document.getElementById("resultShuffleSort").innerHTML=string;
}

//function reduce which join the result find in map and shuffleAndSort functions. 
function Reduce(tab){
	var i=0;
	var j=0;
	var tabResult = new Array();
	
	//for each words, it counts the number of occurance find by the map function
	for(i=0; i<tab.length; i++){
		tabResult[i]=new Array();
		tabResult[i][0]=tab[i][0];
		tabResult[i][1]=tab[i].length-1;
	}
	
	//return the table with words and time number it occures
	return tabResult;
}

