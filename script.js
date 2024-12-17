body = document.getElementsByTagName("body")[0]; 
container=document.getElementsByClassName("container")[0];
heading=document.getElementById("heading");
para=document.getElementById("para");
dark=document.getElementById("dark");
light=document.getElementById("light");

function changeToDark(){
    body.style.backgroundColor = "rgb(93, 94, 94)";
    container.style.backgroundColor="rgb(49,49,49)";
para.style.color="whitesmoke"
    heading.style.color="aliceblue";
    body.style.transition= "1s ease-in-out";
        container.style.transition="1s ease-in-out";
        para.style.transition="1s ease-in-out";
            heading.style.transition="1s ease-in-out";

}

function changeToLight(){
    body.style.backgroundColor = "rgb(215, 214, 214)";
    container.style.backgroundColor="aliceblue";
    para.style.color="black"
        heading.style.color="black";
        body.style.transition= "1s ease-in-out";
        container.style.transition="1s ease-in-out";
        para.style.transition="1s ease-in-out";
            heading.style.transition="1s ease-in-out";
}


// rgb(215, 214, 214)