function distanceFromHqInBlocks(street) {
    if (street < 42) {
        return 42 - street
    }
    return street - 42
}

function distanceFromHqInFeet(block) {
    let dist = distanceFromHqInBlocks(block)
    return dist * 264
}

function distanceTravelledInFeet(block, street) {
    if (block > street) {
        return (block - street) * 264
    } else {
        return (street - block) * 264
    }
}

function calculatesFarePrice(start, destination) {
    let dist = distanceTravelledInFeet(start, destination);
    if (dist < 400) {
        return 0;
    } else if (dist <= 2000) {
        return (dist - 400) * 0.02;
    } else if (dist <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
