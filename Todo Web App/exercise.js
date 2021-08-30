// to create object 

var car = {
    name : "Toyota",
    color : "Red",
    year : 2016
}

// to create array
 var randomList = [ car, "Toyota", 20]
 console.log (randomList)
 randomList.push ("I miss you Jan")
 console.log (randomList)   

 // to create function 

 function printCarDetails(car) {
     console.log ("I am a " + car.color + car.name + "car from"+ car.year)
     
 }