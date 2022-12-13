function movieRatings(input) {


    let index = 0;
    let moviesCount = Number(input[index]);
    index++

    let topMovieName = "";
    let topMovieScore = 0 ;

    let lowMovieName = "";
    let lowMovieScore = 0;

    let sumScore = 0;

    for (let i = 1; i < input.length; i += 2) {
        let movieName = input[i]
        let movieScore = Number(input[i + 1])
        
        sumScore += movieScore

        if (topMovieScore < movieScore){
            topMovieName = movieName
            topMovieScore = movieScore
        }
       
        if (topMovieScore > movieScore){
            lowMovieName = movieName
            lowMovieScore = movieScore
        }
    }

    
    let averageMovieScore = sumScore / moviesCount

    console.log(`${topMovieName} is with highest rating: ${topMovieScore.toFixed(1)}`)
    console.log(`${lowMovieName} is with lowest rating: ${lowMovieScore.toFixed(1)}`)
    console.log(`Average rating: ${averageMovieScore.toFixed(1)}`)

}
movieRatings(["3",
"Interstellar",
"8.5",
"Dangal",
"8.3",
"Green Book",
"8.2"])



