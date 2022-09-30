
let cardArray=[];
let sum=0;
let hasBlackJack= false;
let isAlive=false;
let msg="";
let message=document.querySelector("#message");
let cards=document.querySelector("#cards-bj");
let sumCards=document.querySelector("#sum-bj");

function startGame(){
	isAlive=true;
	let fC=getRandom();
	let sC=getRandom();
	sum=fC+sC;
	cardArray=[fC,sC];
	playGame();



}

function getRandom(){
	let random= Math.floor(Math.random()*13)+1;
	if(random>10){
		return 10;
	}else if(random===1){
		return 11;
	}else{
		return random;
	}
}

function playGame(){
	cards.textContent="Cards:";
	for(let i=0;i<cardArray.length;i++){
		cards.textContent+=cardArray[i]+" ";
	}
	sumCards.textContent="Sum: "+sum;
	if(sum<=20){
		msg="Do You Want To Draw A New Card?";
	}
	else if(sum===21){
		msg="You've got Black-Jack!";
		hasBlackJack=true;
	}else{
		msg="You're out of the Game..";
		isAlive=false;
	}
	message.textContent=msg;
}

function newCard(){
	if(isAlive===true && hasBlackJack===false){
	let nC=getRandom();
	cardArray.push(nC);
	sum+=nC;
	playGame();}
}