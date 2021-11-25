const students = [
	{
		"name" : "Adi Dzocaj",
		"image": "assets/images/students/adi-dzocaj.jpg",
	},
	{
		"name" : "Alexander Bergquist",
		"image": "assets/images/students/alexander-bergquist.jpg",
	},
	{
		"name" : "Alexander Kocman",
		"image": "assets/images/students/alexander-kocman.jpg",
	},
	{
		"name" : "Benjamin Benson",
		"image": "assets/images/students/benjamin-benson.jpg",
	},
	{
		"name" : "Benjamin Tsubarah",
		"image": "assets/images/students/benjamin-tsubarah.jpg",
	},
	{
		"name" : "Calle Nilsson",
		"image": "assets/images/students/calle-nilsson.jpg",
	},
	{
		"name" : "Chikage Takahashi Molander",
		"image": "assets/images/students/chikage-takahashi-molander.jpg",
	},
	{
		"name" : "Daniel Be",
		"image": "assets/images/students/daniel-be.jpg",
	},
	{
		"name" : "Daniel Carlsson",
		"image": "assets/images/students/daniel-carlsson.jpg",
	},
	{
		"name" : "Elin Ahlgren",
		"image": "assets/images/students/elin-ahlgren.jpg",
	},
	{
		"name" : "Emma Käck",
		"image": "assets/images/students/emma-kack.jpg",
	},
	{
		"name" : "Eric Ståhl",
		"image": "assets/images/students/eric-stahl.jpg",
	},
	{
		"name" : "Frans Gustavson Påsse",
		"image": "assets/images/students/frans-gustavson-passe.jpg",
	},
	{
		"name" : "Glafira Veretennikova",
		"image": "assets/images/students/glafira-veretennikova.jpg",
	},
	{
		"name" : "Gustaf Grönlund",
		"image": "assets/images/students/gustaf-gronlund.jpg",
	},
	{
		"name" : "Hanna Håkanson",
		"image": "assets/images/students/hanna-hakanson.jpg",
	},
	{
		"name" : "Heidi Sjöberg",
		"image": "assets/images/students/heidi-sjoberg.jpg",
	},
	{
		"name" : "Hugo Carzborn",
		"image": "assets/images/students/hugo-carzborn.jpg",
	},
	{
		"name" : "Jesper Kling",
		"image": "assets/images/students/jesper-kling.jpg",
	},
	{
		"name" : "Johan Ranestam",
		"image": "assets/images/students/johan-ranestam.jpg",
	},
	{
		"name" : "Johanna Bäckström",
		"image": "assets/images/students/johanna-backstrom.jpg",
	},
	{
		"name" : "Johanna Jönsson",
		"image": "assets/images/students/johanna-jonsson.jpg",
	},
	{
		"name" : "Jona Torsson",
		"image": "assets/images/students/jona-torsson.jpg",
	},
	{
		"name" : "Josefine Ahlstedt",
		"image": "assets/images/students/josefine-ahlstedt.jpg",
	},
	{
		"name" : "Julia Jespersdotter Högman",
		"image": "assets/images/students/julia-jespersdotter-hogman.jpg",
	},
	{
		"name" : "Julia Nemell",
		"image": "assets/images/students/julia-nemell.jpg",
	},
	{
		"name" : "Linus Lindberg",
		"image": "assets/images/students/linus-lindberg.jpg",
	},
	{
		"name" : "Malin Olsson",
		"image": "assets/images/students/malin-olsson.jpg",
	},
	{
		"name" : "Maria Haara-Lundhammar",
		"image": "assets/images/students/maria-haara-lundhammar.jpg",
	},
	{
		"name" : "Maria Lövgren",
		"image": "assets/images/students/maria-lovgren.jpg",
	},
	{
		"name" : "Nikola Dimitrijoski",
		"image": "assets/images/students/nikola-dimitrijoski.jpg",
	},
	{
		"name" : "Paulina Kiendys",
		"image": "assets/images/students/paulina-kiendys.jpg",
	},
	{
		"name" : "Raymond Lam",
		"image": "assets/images/students/raymond-lam.jpg",
	},
	{
		"name" : "Robin Karlsson",
		"image": "assets/images/students/robin-karlsson.jpg",
	},
	{
		"name" : "Sara Almqvist",
		"image": "assets/images/students/sara-almqvist.jpg",
	},
	{
		"name" : "Tim Nilsson",
		"image": "assets/images/students/tim-nilsson.jpg",
	},
	{
		"name" : "Tirapat Sukjit",
		"image": "assets/images/students/tirapat-sukjit.jpg",
	},
	{
		"name" : "Tobias Silfverberg",
		"image": "assets/images/students/tobias-silfverberg.jpg",
	},
	{
		"name" : "Wiktoria Dobrzewinska",
		"image": "assets/images/students/wiktoria-dobrzewinska.jpg",
	},
];

const missing_students = [
	{
		"name": "Andjela Saponjic",
		"image": null,
	},
	{
		"name": "Cazpian Levén",
		"image": null,
	},
	{
		"name": "Frida Lam",
		"image": null,
	},
	{
		"name": "Maxim Khnykin",
		"image": null,
	},
	{
		"name": "Philip Le",
		"image": null,
	},
];

//Shuffle array function
const shuffleArray = array => {
	for (let i = array.length - 1; i > 0; i--) {
	  const j = Math.floor(Math.random() * (i + 1));
	  const temp = array[i];
	  array[i] = array[j];
	  array[j] = temp;
	}
  }
//Making a clone of the students array
let clones = [...students];
//Preparing to save the right stiudent
let rightStudent;

//Function that produces a classmate
const classmate = function () {
	//Shuffle the clones array and saving the right student
	shuffleArray(clones);
    rightStudent = clones[0];

	//get and attach img to "card"
	let img = document.querySelector("#image");
	let link = img.getAttribute("src");
	img.setAttribute("src", link+=clones[0].image);

    //Take the first four students in the cloned array and shuffle it
    let slicedStudents = clones.slice(0,4).map(student => student.name);
    shuffleArray(slicedStudents);

    //Loop through the shuffled sliced array and create a button for each student
    //I also ad an ID for each student to be able to get the right student button
	slicedStudents.forEach(element => {
		let namn= element;
		let nameNoSpace = namn.replace(/\s/g, '');
		let container = document.querySelector("#btnContainer");
		container.innerHTML+=`<button type="button" id="${nameNoSpace}" data-name="${namn}" class="btn btn-dark m-1">${element}</button>`
	}); 
    //Filter out the right student so that we do not get it a second time
    clones = clones.filter(student => student !== rightStudent);
}

//Initiate function so that we get a new classmate
classmate();

//Save how many tries we´ve made, highscore and how many correct answers we have
let tries=0;
let correct=0;
let highscore=0;

//Save the "make a guess" button
let makeGuess = document.querySelector("#btnContainer");
//Save if we clicked on the button
let clicked = 0;

//Showing right and wrong answer while making a guess
makeGuess.addEventListener('click', e => {
	if (e.target.tagName == "BUTTON" && tries<3 ) {
		clicked++;
		let clickedOn=e.target.dataset.name;
		let rightAnswer= rightStudent.name;
		let rightAnswerId= rightAnswer.replace(/\s/g, '');
		if (clickedOn===rightAnswer && clicked===1) {
			tries++;
			correct++;
			e.target.classList.replace("btn-dark", "btn-success");
		} else if (clickedOn!==rightAnswer && clicked===1){
			tries++;
			e.target.classList.replace("btn-dark", "btn-danger");
			let rightBtn = document.querySelector(`#${rightAnswerId}`);
			rightBtn.classList.replace("btn-dark", "btn-success");
		}
	} 
});

//saving the "next" button
let next = document.querySelector("#next");

//When you click on next (and your guesses are under 10) empty the button container and the image
//while also initiating a new classmate
next.addEventListener('click', e => {
    if (tries<3) {
        clicked=0;
	    let container = document.querySelector("#btnContainer");
	    container.innerHTML=``;

	    let img = document.querySelector("#image");
	    let link = img.getAttribute("src");
	    img.setAttribute("src", "");
	    classmate();
        //If yuor guesses are up, also empty the button container and image while also showing the resluts
    } else if (e.target.tagName == "BUTTON" && tries===3){
		let container = document.querySelector("#btnContainer");
		container.innerHTML=``;

		let img = document.querySelector("#image");
		img.setAttribute("src", "");

        //Show the results
		document.querySelector("#title").innerHTML=`You got ${correct}/${tries}`;

        //Check highscore
        if (highscore===0){
            highscore=correct;
            document.querySelector("#highscore").innerHTML=` This is your first highscore: ${highscore}`;
        } else if (highscore<correct) {
            highscore=correct;
            document.querySelector("#highscore").innerHTML=` Yay new highscore!! Wich is.. ${highscore}!`;
        } else {
            document.querySelector("#highscore").innerHTML=` Sadly no new highscore, but the current one is: ${highscore}!`;
        }

        //Hide the "next" button
        next.classList.add("hidden");
        //Create a "new game" button
        document.querySelector("#gameContainer").innerHTML+=`<button id="new" type="button" class="btn btn-dark m-1">New Game?</button>`

        //Start a new game
        document.querySelector("#new").addEventListener('click', e => {
            //reset clicked
            clicked = 0;
            //Reset the containers and variables
            let container = document.querySelector("#btnContainer");
            container.innerHTML=``;
            document.querySelector("#title").innerHTML='';
            document.querySelector("#highscore").innerHTML='';
            document.querySelector("#new").remove();
            next.classList.remove("hidden");

            tries=0;
            correct=0;
            //Reeassign clones again so that I get the filtered students back
            clones = [...students];
            //Initiate the game
            classmate();
        })
	}	
});
