function triangleAreaByThreeSides(a, b, c){

    let s = (a + b + c)/2
    let area = 0;
    area = Math.sqrt(s*(s-a)*(s-b)*(s-c));

    console.log(area);
    
}
triangleAreaByThreeSides(2, 3.5, 4)