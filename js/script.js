


//Question 1: 

//* DONE
//Create an object called cat. 
//Give the object one property called 
//complain.complain's value should be a method 
//(a function) which logs the string "Meow!".

//answer 1;

const cat = {
    complain: "Meow!"
}

console.log(cat.complain)


//Question 2: *DONE

//Select the h3 from the HTML using the querySelector 
//method and assign it to a variable called heading.
//Change its innerHTML value to "Updated heading".


//answer 2:

var heading = document.querySelector("h3")

heading.innerHTML = "Updated heading"




//Question 3: *DONE
//Use the style property on the heading variable from 
//the question above to change its font size to "2em".

//answer 3:

heading.style.fontSize = "2em"



//Question 4: *DONE
//Add a class to the heading variable called subheading.

//answer 4:

heading.className = "subheading"



//Question 5: *DONE

//Write code that selects all the p elements on a page * DONE
//and 
//assigns them to a variable called paragraphs. *DONE
//Loop through the p elements and change the colour of each to "red".

var paragraph = document.querySelectorAll("p")


for(var i = 0; i < paragraph.length ; i++){
    paragraph[i].style.color = "red"
}



//Question 6: *DONE

//Select the div with a class of results, assign it to a variable called 
//resultsContainer and set its inner HTML to be < p > New paragraph</p > 
//and its background colour to be yellow.


var resultsContainer = document.querySelector(".results")


resultsContainer.innerHTML ="<p> New paragraph </p>"


//Question 7:

//Create a function that has one parameter called list.
//Inside the function, loop through the list parameter and console log 
//the name property in each object.
//Call the function and pass in the cats variable in the script.js file in the repo.






//function animal(){

   // for (var i = 0; i < cats.name.length; i++);{
      //  console.log(cats.name[i])
    //}
//}


//Question 8:
//Create a function called createCats.The function will have one parameter called cats. *DONE
//Inside the function loop through the value passed in as cats and create HTML for each object in the array.
//Wrap each item in a div, each name property in an h5 tag and each age property in a p tag.
//If the age property is missing, it should display “Age unknown” instead.
//Return the HTML from the function.
//Call the function and pass in the cats array as the argument.
//Assign the return value of the function to the innerHTML property of the element on the HTML page with a class of cat - container.



//answer 8:

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
    
];

function createCats(cats){
    for (var i = 0; i < cats.length; i++){
        var cat = cats[i];
        console.log(cat);
    }
}

