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
        //on a créer le canvas mais on ne la pas attaché a notre page HTML
        document.body.appendChild(canvas);
        // pour dessiner dans un canvas on a besoin de contex = CTX
        // plusieur facon de dessiner dans un canvas ici en 2d 
        ctx = canvas.getContext('2d');
         //création du serpent sniky et il prend un body qui est un tableau de X,[[]]? des carres dans un coprs
        sniky = new Snake([ [6,4],[5,4],[4,4] ]);
        canvas.style.backgroundColor = 'rgb(237,255,238)'; // ou HEX // hexa decimal: #EDFFEE
    
        refreshCanvas();
    
    
    }
    

    //amener le mouvement avec un temp et un rafrechisement de la page
        function refreshCanvas()
        {
    
          
   //efface le rectangle pour qu'il affiche sa nouvelle position
            
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    //dessiner sniky
            sniky.advance();
            sniky.draw();
    // refresh toute les seconde 
            setTimeout(refreshCanvas,delay);
           
        }
            
            function drawBlock(ctx, position)
            {
                var x = position[0] * blockSize;
                var y = position[1] * blockSize;
                ctx.fillRect(x, y, blockSize, blockSize); 
            }

            function Snake(body)
            {
                this.body = body;
                this.draw = function()
                {
        //savez le ctx comme il était avant
                ctx.save();
                ctx.fillStyle = "#86CF3E";
                for(var i= 0; i<this.body.length;i++)
                {
                    drawBlock(ctx, this.body[i]);
                }
            // enc omplement avec ctx.save il remet le contexte comme avant
                ctx.restore();
                };
                
                this.advance = function()
                {
                    var nextPosition = this.body[0].slice();
                    nextPosition[0] += 1;
                    this.body.unshift(nextPosition);
                    this.body.pop(); 
                }
            }
}


// a reviser .unshift .pop .slice