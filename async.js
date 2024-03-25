


const isWakeUp = (status) => {
 return new Promise((resolve, reject) => {
     setTimeout(() => {
        resolve(!status);
        return status;
     }, 3000);
 });
    
}

const breakFast = async(status) => {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("done eating BreakFast");
        resolve(!status);
        return status;
    }, 5000);

   });
}

const takeABath = async(status) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("done taking a bath");
            resolve(!status);
        },5000);

    });
  
}

const dailyRoutine = async(status) => {
    console.log("waking up..");
    const wakeUp = false;
    const doneEating = false;
    const doneBath = false;
    
    const move =  await isWakeUp(wakeUp);
    if(move) {
        console.log("eating breakfast...");
        const eatenBf = await breakFast(doneEating);
        console.log(eatenBf);
        if(eatenBf) {
            console.log("taking a bath....");
            const takingB = await takeABath(doneBath);
            console.log(takingB);
           return !status;
        }
    }

};

const nextRoutine = async() => {
    return new Promise((resolve, reject) => {
        resolve("Going to School");
    })
}

const dailyLife = async() => {
    const done = await dailyRoutine();
    if (done) {
        console.log("Routine done for today");
    }
}

dailyLife();