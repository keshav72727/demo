class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.rank = null;

    }

    getCount(){
        var playerStateRef = database.ref('playerCount');
        playerStateRef.on("value",function (data){
            playerCount = data.val();
        }) 
    }

    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }

    getCarsAtEnd(){
        var carsAtEnd = database.ref('CarsAtEnd');
        carsAtEnd.on("value",(data)=>{
            this.rank = data.val();
        })
    }

    static updateCarsAtEnd(rank){
        database.ref('/').update({
            CarsAtEnd : rank
        })
    }

    
    update(){
        var playerIndex = "Players/Player"+this.index;
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance
        })
    }

    static getPlayerInfo(){
        var playerInforef = database.ref('Players');
        playerInforef.on("value",(data)=>{
            allPlayers = data.val();
        })
    }
    
}
