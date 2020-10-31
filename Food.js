class Food {
    constructor(){
    this.foodStock=0;
    this.lastFed;
    this.image=loadImage('Images/Milk.png');
    }

   updateFoodStock(foodStock){
    this.foodStock=foodStock;
   }

   getFedTime(lastFed){
     this.lastFed=lastFed;
   }

   deductFood(){
     if(this.foodStock>0){
      this.foodStock=this.foodStock-1;
     }
    }

    getFoodStock(){
      return this.foodStock;
    }

    display(){
      var x=80,y=100;
      
      imageMode(CENTER);
      image(this.image,720,220,70,70);
      
      if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%10==0){
            x=80;
            y=y+50;
          }
          image(this.image,x,y,50,50);
          x=x+30;
        }
      }
    }
    //Create three methods - bedroom(), garden(), washroom() - in Food.js file and add background function with their respective images. 
    if(gameState="garden"){
    feed.hide();
    addFood.hide();
    dog.hide();
    sadDog.hide();
    happyDog.hide();
    foodObj.hide();
    bedRoom.hide();
    washRoom.hide();
    background(garden);
    }

    if(gameState="washRoom"){
      feed.hide();
      addFood.hide();
      dog.hide();
      sadDog.hide();
      happyDog.hide();
      foodObj.hide();
      bedRoom.hide();
      garden.hide();
      background(washRoom);
      }
      
    if(gameState="bedRoom"){
      feed.hide();
      addFood.hide();
      dog.hide();
      sadDog.hide();
      happyDog.hide();
      foodObj.hide();
      garden.hide();
      washRoom.hide();
      background(bedRoom);
      }
}
