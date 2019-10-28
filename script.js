//fonction qui va ce lancer qaund la fenêtre du navigateur va s'afficher
window.onload = function()
{
    //variable
    var canvasWidth = 900;
    var canvasHeight = 600;
    var blockSize = 30;
    var ctx;
    var delay = 200;
    
    var sniky ;

    // exécution de fonction
    init();

    //---------------------------------------------------------------------------------------------------
        function init()
    {
    //création du canvas
        var canvas = document.createElement('canvas');
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.border = "2px solid red";
       //relie le body au canvas
        document.body.appendChild(canvas);
        ctx = canvas.getContext('2d');
        canvas.style.backgroundColor = 'rgb(237,255,238)'; 
        
        /*creation du snake avec la fonction snacke et constructeur*/
        sniky = new Snake([ [6,4],[5,4],[4,4],"right" ]);
        refreshCanvas();
    
    }

    /*-----------------------------------------------------------------------------------*/    
        function refreshCanvas()
        {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            sniky.advance();
            sniky.draw();
            setTimeout(refreshCanvas,delay);
            
        }
            
        function drawBlock(ctx, position)
        {
            var x = position[0] * blockSize;
            var y = position[1] * blockSize;
            ctx.fillRect(x, y, blockSize, blockSize); 
        }

 /*--------------------------------------------------------------------------------------------------*/
        function Snake(body,direction)
        {
            this.body = body;
            this.direction = direction;
            this.draw = function()
        {
            ctx.save();
            ctx.fillStyle = "#86CF3E";
            for(var i= 0; i<this.body.length;i++)
            {
                drawBlock(ctx, this.body[i]);
            }
            ctx.restore();
        };
/*----------------------------------------------------------------------------------------------*/
            this.advance = function()
            {
                var nextPosition = this.body[0].slice(); //extrait le premier elelment du nouveau tableau 
                switch(this.direction)
                {
                    case "left":
                        nextPosition[0] -=1;
                    breack;
                    case "right":
                        nextPosition[0] +=1;
                    breack;
                    case "down":
                        nextPosition[1] +=1;
                    breack;
                    case "up":
                        nextPosition[1] -=1;
                    breack;
                    default : 
                    throw("erreur of direction line 88");
                }
                nextPosition[0] += 1;
                this.body.unshift(nextPosition); //rajoute un nouveau contenu au debut du nouveau tableau
                this.body.pop();   //supprime le dernier element et retourne cette élément
            };
/*----------------------------------------------------------------------------------------------------------*/
            this.setDirection = function(newDirection)
            {   
                //les direction permise par les touche et la direction
                var allowedirections;
                switch(this.direction)
                {
                    case "left":
                    case "right":
                            allowedirections = ["up","down"];
                    breack;
                        case "up":
                        case "down":
                            allowedirections = ["left","right"]
                        breack;
                        default:
                            throw("erreur of direction line 107");
                }
                if(allowedirections.indexOf(newDirection)> -1)
                {
                    this.direction = newDirection;
                }
            }
        }
        //quand l'utilisateur appui sur une touche de sont clavier
     this.document.onkeydown = function()
     {
         // on va fixé  la direction en fonction de la touche que l'on appuie
         // et il faut la passer au serpent
         var key = e.keyCode;
         var newDirection;
         switch(key)
         {
            case 37 :
                newDirection = "left";
            break;
            case 38 :
                newDirection = "up";
            break;
            case 39 :
                newDirection = "right";
            break;
            case 40 :
                newDirection = "down";
            breack;
            default :
            return;
         }
         sniky.setDirection(newDirection);
     }
}


// a reviser .unshift .pop .slice