class Game {
    constructor(){

    }
    
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function (data){
            gameState = data.val();
        }) 
    }
    
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    async start(){
        if(gameState == 0){
            player = new Player();
            var playerCountref = await database.ref('playerCount').once("value");
            if (playerCountref.exists()){
                playerCount = playerCountref.val();
                player.getCount();
                
            }
            player.getCount();
            form = new Form();
            form.display();
        }
        car1 = createSprite(200,200);
        car2 = createSprite(300,200);
        car3 = createSprite(400,200);
        car4 = createSprite(500,200);

        car1.addImage(car1image);
        car2.addImage(car2image);
        car3.addImage(car3image);
        car4.addImage(car4image);

        cars = [car1,car2,car3,car4];
    
    }
    play(){
        form.hide();
        //textSize(25);
        //text("Game Start",120,100);
        Player.getPlayerInfo();
        
        player.getCarsAtEnd();

        background(bg_image);

        image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5);
           

        if(allPlayers !== undefined){
            //var displayPosition = 130;
            var index = 0;
            var x = 275;
            var y = 0;
            for ( var plr in allPlayers){
                index = index + 1;
                x = x + 200;
                y = displayHeight-allPlayers[plr].distance;
                cars[index - 1].x = x;
                cars[index - 1].y = y;
                if(index === player.index){
                    fill("red");
                    stroke("white");
                    ellipse(x,y,80,80);
                    //cars[index - 1].shapeColor = "red"
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index - 1].y;
                    
                }
                //displayPosition += 20;
                //textSize(15);
                //text(allPlayers[plr].name+" : " + allPlayers[plr].distance,120,displayPosition);

            }
        }
        if (keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.update();
        }

        if (player.distance > 4100){
            gameState = 2;
            player.rank += 1;
            Player.updateCarsAtEnd(player.rank);
        }

        
        drawSprites();
        
    }

    end(){
        console.log(player.name + " : " +player.rank);
    }   
    
}