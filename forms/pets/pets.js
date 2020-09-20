// create an array 
var petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam'];
//add marmaduke
var withMarmaduke = petNames.concat(['Marmaduke']);
//get index of sam 
//prompt user to choose an action 
//add the user name to the end 
//first create the variable of the users name in the prompt 
var addName = prompt("Please enter your name");
var newAction = prompt("Please select one of the following options: 1. Remove Vinny 2. Remove Marty 3. Add Nancy 4. Add Your Name 5. Display Riley's Location 6. Display's Cindy Location 7. Show the with Marmaduke Array")

if (newAction == "1") {
  let removeVinny = petNames.splice(5,1)
  //tell the user what action was taken
  alert("the action was take to remove Vinny \n the remaining data is: \n" + petNames)
  //remove martt
} else if (newAction == "2") {
  let removeMarty = petNames.splice(4,1)
  alert("the action was take to remove Marty \n the remaining data is: \n" + petNames)
//add Nancy to the begining of the array 
} else if (newAction == "3") { 
  let addNancy = petNames.unshift('Nancy')
  alert("The action taken was: Add Nancy \n The remaining array data are: \n" + petNames)

} else if (newAction == "4") {
  let newName = petNames.push(addName) 
alert("The action taken was: Add user name \n The remaining array data are: \n" + petNames)

//tells where riley is located
} else if (newAction == "5") {
  let positionRiley = petNames.indexOf('Riley')
  alert("The index of Riley is:" + "  " + positionRiley)
  alert("The action taken was: Index of Riley \n The remaining array data are: \n" + petNames)
 //tells where Cindy is located 
} else if (newAction == "6") { 
  let positionCindy = petNames.indexOf('Cindy')
  alert("The index of Cindy is:" + "  " + posCindy)
  alert("The action taken was: Index of Cindy \n The remaining array data are: \n" + petNames)
//shows the mamrmadueke date
} else if (newAction == "7") { 
  alert(withMarmaduke)
  alert("The action taken was: Show withMarmaduke arrary data \n The remaining array data are: \n" + petNames)
} 
  //test for branch!! 

 