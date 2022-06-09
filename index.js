function distanceFromHqInBlocks(start){
    const scuberHq = 42;
    if (start > scuberHq);{
       return (start - scuberHq);
    }{
        return (scuberHq - start);
    }
}

function distanceFromHqInFeet (start){
    return (parseInt(distanceFromHqInBlocks(start), 10) * 264);
}

function distanceTravelledInFeet (start, destination){
    if (start > destination){
        var distance = start - destination;
    }else{
        var distance = destination - start;
    }
    return (parseInt(distance, 10) * 264)
}


function distanceTravelledInFeet (start, destination){
    if (start > destination){
    var distance = start - destination;
    }else{
        var distance = destination - start;
    }
    return (parseInt((distance), 10) * 264);
}


function calculatesFarePrice (start, destination)
{
    let chargableDistance = distanceTravelledInFeet(start, destination)
    if (chargableDistance <= 400){
        return 0;
    }else if(chargableDistance <= 2000){
        return ((chargableDistance - 400) * 0.02);
    }else if (chargableDistance <= 2500){
        return 25;
    }else{
        return "cannot travel that far";

    }
        
    }
