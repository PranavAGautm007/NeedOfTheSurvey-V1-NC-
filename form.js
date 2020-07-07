class Form{
    constructor(){
this.button=createButton("play");
this.input=createInput("name");
this.complement=createElement("h3");
  this.title=createElement("h3");
  }
    hide(){
        this.voter.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    
    }
        display(){
        
        this.title.html("car racing game");
       this.title.position(displayWidth/2,0);
        this.input.position(displayWidth/2,displayHeight/2);
        this.button.position(displayWidth/2,displayHeight/2+30);
        this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        voter.name = this.input.value();
        voter.Count+=1;
        voter.id=voterCount;
       voter.update();
       voter.updateCount(voterCount);
       this.greeting.html("Hello"+ player.name);
       this.greeting.position(130,160);

        })
     }
      
      
}