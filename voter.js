class Voter{
    constructor(){
this.id=null;
this.name=null;


    }
    getCount(){
        var voterCountref = database.ref("voterCount");
        voterCountref.on("value",(data)=> {
            voterCount=data.val();
        
        })
}
updateCount(Count){
    database.ref("/").update({ 
        voterCount:Count
    })

    
}
update(){
    var voterindex="voters/voter"+this.id;
    database.ref(voterindex).set({
        name:this.name,
        
    
    })
}
static getvoterinfo(){
    var voterinforef = database.ref("voters");
    voterinforef.on("value",(data)=>{
        allvoterinfo=data.val();
    })

    
}

}