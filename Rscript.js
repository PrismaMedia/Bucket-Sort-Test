
function factorial(n){
    if(n <= 0){
        return 1;
    } else {
        return n * factorial(n - 1);
        
    }
}

function display(){
    var input = document.getElementById('number').value;
    var output = factorial(input);
    document.getElementById("display").innerHTML = "Output: " + output;
}



