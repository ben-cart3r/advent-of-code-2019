module.exports = (path1, path2) => {

    // Move from a starting position in a direction for distance
    const walk = (start, dir, dist) => {
        const transforms = {
            'U': {x: 0, y: dist},
            'D': {x: 0, y: -dist},
            'R': {x: dist, y: 0},
            'L': {x: -dist, y: 0}
        };
        return {
            x: start.x + transforms[dir].x,
            y: start.y + transforms[dir].y,
            dist
        }
    }

    // Convert string into array of Points
    const generatePoints = (path) => {
        return path.split(',').reduce((acc, part, idx) => {
            return [
                ...acc,
                walk(acc[idx], part[0], parseInt(part.substring(1)))
            ]
        }, [{x: 0, y: 0, dist: 0}]);
    }

    // Determine if 2 lines (p1 -> p2, p3 -> p4) intersect
    const intersect = (p1, p2, p3, p4) => {

        // ta = offset of intersection along p1 -> p2
        // tad = denumerator
        // tan = numerator
        let tan = ((p3.y - p4.y) * (p1.x - p3.x)) + ((p4.x - p3.x) * (p1.y - p3.y));
        let tad = ((p4.x - p3.x) * (p1.y - p2.y)) - ((p1.x - p2.x) * (p4.y - p3.y));
    
        // tb = offset of intersection along p3 -> p4
        let tbn = ((p1.y - p2.y) * (p1.x - p3.x)) + ((p2.x - p1.x) * (p1.y - p3.y));
        let tbd = ((p4.x - p3.x) * (p1.y - p2.y)) - ((p1.x - p2.x) * (p4.y  - p3.y));

        if(tad == 0 || tbd == 0) {
            return null;
        }
    
        let ta = tan / tad;
        let tb = tbn / tbd;
    
        // Does not intersect or is colinear
        if(ta < 0 || ta > 1 || tb < 0 || tb > 1) {
            return null;
        }

        return {
            x: p1.x + (ta * (p2.x - p1.x)),
            y: p1.y + (ta * (p2.y - p1.y))
        };
        
    }
    
    let intersections = [];
    let route1 = generatePoints(path1);
    let route2 = generatePoints(path2);

    // Find all intersections
    for(let i = 1; i < route1.length; ++i) {

        let p1 = route1[i - 1];
        let p2 = route1[i];

        for(let j = 1; j < route2.length; ++j) {

            let p3 = route2[j - 1];
            let p4 = route2[j];

            let intersection = intersect(p1, p2, p3, p4);

            if(intersection != null) {
                if(!(intersection.x == 0 && intersection.y == 0)) {
                    intersections.push(
                        Math.abs(intersection.x - p1.x + intersection.y - p1.y) + 
                        route1.reduce((acc, p, idx) => idx < i ? acc += p.dist : acc, 0) +
                        Math.abs(intersection.x - p3.x + intersection.y - p3.y) + 
                        route2.reduce((acc, p, idx) => idx < j ? acc += p.dist : acc, 0)
                    )
                }
            }
        } 
    }

    // Calculate nearest intersection
    return intersections
        .sort((a, b) => a > b ? 1 : -1)[0];

}