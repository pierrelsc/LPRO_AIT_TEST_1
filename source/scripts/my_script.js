/*
init
called when body loaded
*/

function init(){
    document.getElementById("test").innerHTML = "init says hi!";
}


/*
*test_button
*called by button onClick
*/


function test_button() {
    var my_test_div = document.getElementById("test");
    my_test_div.innerHTML = "button clicked!";
    my_test_div.style.backgroundColor = "green";
    alert("Cliked");
}