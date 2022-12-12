function lunchBreak(input){

   let movie = (input[0]) 
   let movieTime = Number(input[1])
   let breakTime = Number(input[2])

   let lunchTime = breakTime / 8
   let restTime = breakTime / 4

    let timeForMovie = breakTime - lunchTime - restTime
    let freeTime = timeForMovie - movieTime

   

   if ( timeForMovie >= movieTime){
        console.log(`You have enough time to watch ${movie} and left with ${Math.ceil(freeTime)} minutes free time.`)
   } else {
        console.log(`You don't have enough time to watch ${movie}, you need ${Math.ceil(movieTime - timeForMovie)} more minutes.`)
   }



}

lunchBreak(["Teen Wolf",

"48",

"60"])