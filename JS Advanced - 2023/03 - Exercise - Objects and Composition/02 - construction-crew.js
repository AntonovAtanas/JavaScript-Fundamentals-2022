function constructionCrew(workerInfo) {

    if (workerInfo.dizziness) {
        let waterNeeded = workerInfo.experience * (workerInfo.weight * 0.1);
        workerInfo.levelOfHydrated += waterNeeded;
        workerInfo.dizziness = false;
    }

    return workerInfo
}

console.log(constructionCrew({
    weight: 80,

    experience: 1,

    levelOfHydrated: 0,

    dizziness: true
}));

console.log(constructionCrew({
    weight: 120,

    experience: 20,

    levelOfHydrated: 200,

    dizziness: true
}));

console.log(constructionCrew({
    weight: 95,

    experience: 3,

    levelOfHydrated: 0,

    dizziness: false
}))