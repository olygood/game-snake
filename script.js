//fonction qui va ce lancer qaund la fenêtre du navigateur va s'afficher
window.onload = function()
{
    //variable
    var canvas;
    var ctx;
    var delay = 200;
    var xCoord = 0;
    var yCoord = 0;

    // exécution de fonction
    init();

    //---------------------------------------------------------------------------------------------------
        function init()
    {
        canvas = document.createElement('canvas');
        canvas.width = 900;
        canvas.height = 600;
        canvas.style.border = "2px solid red";
        canvas.style.backgroundColor = 'rgb(237,255,238)'; // ou HEX // hexa decimal: #EDFFEE
    
    // on a créer le canvas mais on ne la pas attaché a notre page HTML
        document.body.appendChild(canvas);
    // pour dessiner dans un canvas on a besoin de contex = CTX
    // plusieur facon de dessiner dans un canvas ici en 2d 
        ctx = canvas.getContext('2d');
        refreshCanvas();
    
    
    }
    

    // amener le mouvement avec un temp et un rafrechisement de la page
        function refreshCanvas()
        {
    // xcoord += 2;    / = xcoord = xcoord+2
            xCoord += 5;
            yCoord += 5;
   //efface le rectangle pour qu'il affiche sa nouvelle position
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#ff0000";
        
    //fillrect (x, y  = par a port au canvas depart haut à gauche / largeur, hauteur = du rectangle)
            ctx.fillRect(xCoord, yCoord, 30,30,100,50);
    // refresh toute les seconde 
            setTimeout(refreshCanvas,delay);
        }
}


