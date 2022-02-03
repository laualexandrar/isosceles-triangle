function isoscelesTriangleHeight(side1, side2, base){

    var limitBase = side1 + side2;
    if(side1 > 0 && side2 > 0 && base > 0 ){
        if(base < limitBase){
            if(side1 == side2 && side1 !== base) {
                return Math.sqrt((side1*side2)-((base*base)/4));
            } else {
                alert("this is not an isosceles triangle");
            }s
        } else {
            alert("The length of the base of an isosceles triangle has to be less than the sum of the two equal sides")
        }
    }else {
    alert("This is not a triangle");
    }
}

function calculateHeightIsosceles(){
    const inputSideOne = document.getElementById("triangle-One-side-input");
    const sideOneValue = Number(inputSideOne.value);
    
    const inputSideTwo = document.getElementById("triangle-two-side-input");
    const sideTwoValue = Number(inputSideTwo.value);
    
    
    const inputBase= document.getElementById("triangle-base-input");
    const baseValue = Number(inputBase.value);

    const height = isoscelesTriangleHeight(sideOneValue, sideTwoValue, baseValue);
    alert(height);
}