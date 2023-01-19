class player {
    isAlive=true;
    hasBlackJack=false;
    cards=[];
    sum = 0;
    chip = 100;
   getRandomCard= function (){
        let randomCard=Math.floor(Math.random()*13)+1;
        if(randomCard>10){
            randomCard=10;
        }
        return randomCard;
    }
    startit(){
        for(let i=0;i<2;i++){
            this.cards.push(this.getRandomCard());
        }
    }
    Randmoize= function (){
        let tmp="";

        if(this.isAlive&&!this.hasBlackJack){
            tmp=this.getRandomCard();
        }
        return tmp;
    }
    getSum  = function (){
        let summation=0;
        this.cards.forEach(element => {
            summation+=element;
            if(summation>21){
                this.isAlive=false;
            }
        });
        if(summation==21){
            this.hasBlackJack=true;

        }
         this.sum=summation;
    }
}
let p;
function start(){
    document.getElementById("Gain").style.color="black";
    document.getElementById("newCard").disabled=false;
    let P=new player;
    P.startit();
    P.getSum();
    document.getElementById("Gain").textContent+=P.chip;

    document.getElementById("Cards").textContent=P.cards;
    document.getElementById("Sum").textContent=P.sum;
    p=P;

}
function newCard(){
    p.cards.push(p.Randmoize());
    p.getSum();
    if(!p.isAlive){
        document.getElementById("Gain").textContent="You are out of the game";
        document.getElementById("Gain").style.color="red";
        document.getElementById("newCard").disabled=true;

    }
    document.getElementById("Cards").textContent=p.cards;
    document.getElementById("Sum").textContent=p.sum;
    
}
