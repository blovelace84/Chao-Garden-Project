export function clamp(value: number, min = 0, max = 100){
    return Math.min(Math.max(value, min), max);
}

export function randomBetween(min: number, max: number){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function calculateHungerDecay(
    lastFed: number,
    now: number = Date.now()
) {
    const hoursPassed = (now - lastFed) / (1000 * 60 * 60);
    return Math.floor(hoursPassed * 5); // 5 hunger points per hour/ tweak later
}

export function moodFromStats(
    happiness: number,
    hunger: number,
    energy: number
) {
    if(hunger < 30) return "hungry";
    if(energy < 30) return "tired";
    if(happiness > 70) return "happy";
    return "neutral";
}