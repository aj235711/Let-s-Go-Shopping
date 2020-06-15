var button = document.querySelector(".button1");
var bar = document.querySelector(".bar");
var ul = document.querySelector("ul");
var database = [];
var btnarray = [];
var button2 = document.querySelector(".button2");
var count = 0;
var list_array = [];

button.addEventListener("click", listenClick)

function listenClick() {
	if(bar.value !== "") {
		checkDatabase();
	}
} 

bar.addEventListener("keypress", listenEnter)

function listenEnter(event) {
	if(bar.value !== "" && event.keyCode === 13) {
		checkDatabase();
	}
}

function checkDatabase() {
	var f = 0;
	for(var i = 0; i < database.length; i++) {
		if(bar.value === database[i]) {
			f = 1;
		}
	}
	if(f === 0) {
		addInList();
	} else {
		showMessage();
	}
}

function addInList() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(bar.value));
	var but = document.createElement("button");
	// but.innerHTML = "<img src = \"del.png\" width = \"15px\" height = \"15px\">";
	but.innerHTML = "Remove";
	but.classList.add("btn");
	li.innerHTML = bar.value;
	// var img = but.innerHTML;
	li.appendChild(but);
	li.classList.add("flexer");
	ul.appendChild(li);
	// but.appendChild(document.createTextNode("Remove"));
	// ul.appendChild(but);
	database.push(bar.value);
	bar.value = "";
	// li.classList.add("round");
	btnarray[count] = but;
	list_array[count] = li;
	// imgarr[count] = img;
	count++;
}

ul.addEventListener("mouseover", updateClasses) 

function updateClasses(event) {
	var li = event.target;
	li.classList.toggle("listhover");
}

ul.addEventListener("mouseout", reupdateClasses) 

function reupdateClasses(event) {
	var li = event.target;
	li.classList.toggle("listhover");
}

ul.addEventListener("click", removeFromList)

function removeFromList(event) {
	var f = 0;
	var unknown = event.target;
	for(var i = 0; i <= count; i++) {
		if(unknown === btnarray[i]) {
			f = 1;
			break;
		}
	}
	if(f = 1) {
		database.splice(i, 1);
		ul.removeChild(list_array[i]);
	}
}

button2.addEventListener("click", newList)

function newList() {
	ul.innerHTML = "";
	database = [];
	btnarray = [];
	list_array =[];
}