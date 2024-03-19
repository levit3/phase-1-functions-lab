function distanceFromHqInBlocks(dist) {
    if (dist > 42) {
        let blocks = dist - 42
        return blocks
    }
    else{
        let blocks = 42 - dist
        return blocks
    }
}
const distanceFromHqInFeet = dist => {
    if (dist > 42) {
        let blocks = dist - 42
        let feet = blocks * 264
        return feet
    }
    else {
        let blocks = 42 - dist
        let feet = blocks * 264
        return feet
    }
}
function distanceTravelledInFeet(num1, num2) {
    if (num2 > num1) {
        let distTravelled = (num2 - num1)*264
        return distTravelled
    }
    else {
        let distTravelled = (num1 - num2)*264
        return distTravelled
    }
}
const calculatesFarePrice = (start, destination) => {
    if (destination > start) {
        let distTravelled = (destination - start)*264
        if (distTravelled < 400) {
            let cost = 0
            return cost
        }
        if (distTravelled >400, distTravelled < 2000) {
            let cost = distTravelled * 0.02
            return cost
        }
        else {
            let cost = 25
            return cost
        }
    }
    else {
        let distTravelled = (start- destination)*264
        if (distTravelled < 400) {
            let cost = 0
            return cost
        }
        else if (distTravelled >400, distTravelled < 2000) {
            let cost = (distTravelled-400) * 0.02
            return cost
        }
        else if (distTravelled >2000, distTravelled < 2500) {
            let cost = 25
            return cost
        }
        else {
            return "cannot travel that far"
        }

    }
}