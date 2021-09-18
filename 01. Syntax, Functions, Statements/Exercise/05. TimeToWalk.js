function solve(steps, length, speedKmH){
    const speedMS = speedKmH*1000/3600;
    const distanceM = steps * length;
    const additionalMinutes = Math.floor(distanceM/500);
    const timeInMinutes = (distanceM/speedMS)/60 + additionalMinutes;
    const hours = Math.floor(timeInMinutes/60);
    const minutes = Math.floor(timeInMinutes%60);
    const seconds = (distanceM/speedMS)%60;
    return `${hours.toFixed(0).padStart(2, "0")}:${minutes.toFixed(0).padStart(2, "0")}:${seconds.toFixed(0).padStart(2, "0")}`;
}

console.log(solve(4000, 0.60, 5));
console.log(solve(2564, 0.70, 5.5));