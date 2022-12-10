function literatura(input){

    let pageNumber = Number(input[0])
    let pagesPerHour = Number(input[1])
    let days = Number (input[2])

    let totalTimeForBook = pageNumber / pagesPerHour
    let totalTime = totalTimeForBook / days

    console.log(totalTime)


}

literatura (["432 ","15 ","4 "])