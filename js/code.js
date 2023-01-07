let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) =>{
  
 button.addEventListener('click', (e) => {
    if(e.target.innerHTML == '='){
        string = eval(string);
        document.querySelector('input').value =  string;
    }
    else if( e.target.innerHTML == 'RESET'){
        string="";
        document.querySelector('input').value =  string;
    } 
    else if( e.target.innerHTML == 'DEL'){
        string= string.slice(0, string.length - 1);
        document.querySelector('input').value =  string;

    } 
   else{

    console.log(e.target);
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
   }


 })
})

let doot = document.getElementById("dot")

doot.onclick = () => {
   
    if(string.includes(".") == true) {
		string = string;
	} else {
		string = ".";
	}
}

let one = document.getElementById("one");

let two = document.getElementById("two");

let three = document.getElementById("three");

let changeTheme = document.querySelector('body');

let circlePosition = document.getElementById
('circle');
let circlePosition2 = document.getElementById
('circle2');
let circlePosition3 = document.getElementById
('circle3');


one.addEventListener('click', () =>{
    changeTheme.setAttribute('id', 'theme1');
    circlePosition.style.opacity = "1";
    circlePosition2.style.opacity = "0";
    circlePosition3.style.opacity = "0";
})
two.addEventListener('click', () =>{
    changeTheme.setAttribute('id', 'theme2');
    circlePosition.style.opacity = "0";
    circlePosition2.style.opacity = "1";
    circlePosition3.style.opacity = "0";
})
three.addEventListener('click', () =>{
    changeTheme.setAttribute('id', 'theme3');
    circlePosition.style.opacity = "0";
    circlePosition2.style.opacity = "0";
    circlePosition3.style.opacity = "1";
})

circlePosition.addEventListener('click', () =>{
    changeTheme.setAttribute('id', 'theme1');
    // circlePosition.style.left = '0';
    circlePosition.style.opacity = "1";
    circlePosition2.style.opacity = "0";
    circlePosition3.style.opacity = "0";
})
circlePosition2.addEventListener('click', () =>{
    changeTheme.setAttribute('id', 'theme2');
    // circlePosition.style.left = '34%';
    circlePosition.style.opacity = "0";
    circlePosition2.style.opacity = "1";
    circlePosition3.style.opacity = "0";
})
circlePosition3.addEventListener('click', () =>{
    changeTheme.setAttribute('id', 'theme3');
    // circlePosition.style.left = '72%';
    circlePosition.style.opacity = "0";
    circlePosition2.style.opacity = "0";
    circlePosition3.style.opacity = "1";
})
