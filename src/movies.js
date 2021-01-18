// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors (array){
    let alldir;
     alldir=array.map(function(movie){
      
        //alldir+= movie.director;
        console.log(movie.director);
        //return alldir;
     })
     return alldir
     //return alldir;
}
//console.log(alldir);
getAllDirectors(movies);
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies (arr)
{   if (arr.length === 0) {
        return 0;
      }   
     const steven= arr.filter(function(array)
      {   let sum=0;
          if (array.genre=== "Drama")
             {console.log("me meto en 1");
                  return 1;
              
              }
         
        })
        return steven;
    console.log(steven);
  
}  
howManyMovies(movies);


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
    if(movies.length===0) 
        return 0;
    
    const average=movies.reduce(functions(sum,movie){ 
        return sum +(movie.rate|| 0)
    } ,0) / movies.length;

    return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
