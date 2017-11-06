$( function() {
    $( ".score" ).html("Score: 0");
    $( ".level" ).html("lives: 3");
    $ ( ".GameOver" ).html("<div class='title'><h2>Welcome to JSPLATFORM!</h2>Choose a level</div><div class='easy' onclick='start(\"easy\")'>Easy</div><div class='medium' onclick='start(\"medium\")'>Medium</div><div class='hard' onclick='start(\"hard\")'>Hard</div>");
});

var easy = [
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "x              333    2x       2x                              x",
    "x                     2x       2x                              x",
    "x  @  oo                                            111        x",
    "xxxxxxxx      oo           x                xxx     xxx        x",
    "x            xxxxxxxxxxxxxxxxxxxxxx   xxx                      x",
    "x                              x                               x",
    "x                              x      11      xxxxxxxxxx       x",
    "x    xxx  2xxxxxxxxxxx    xxxxxx   xxxxx                       x",
    "x                x             x      2x                       x",
    "x                x             x o     xxxxxxxxx      xxxxxxxxxx",
    "x4         xxxxxxx    2x       xxxx    x4                      x",
    "x4               x    2x       x       x                       x",
    "x4               x     x   oo 2x     o x                       x",
    "x                x     x   x  2x    xxxx   xxxxx     xxxxxxxxxxx",
    "x                             2x           33333            333x",
    "x     xxxxxx                   x                               x",
    "x                     2x       x                 oo            x",
    "x                     2x       x               xxxxxx    xxxxxxx",
    "x     oo               x       x111                            x",
    "x    xxx               x       xxxxxxx                         x",
    "x           xxxxxxxxxxxxxx   xxx                               x",
    "x                             2x        xxx   xxx              x",
    "x     x                       2x                               x",
    "x     xxx  xxxxxxxxxx    xxxxxxx                    xxxxxxxxxxxx",
    "x                x4                      oo         x333       x",
    "x                x4                     xxxxxxx     x          x",
    "xxxxxx           x                        333       x       oo x",
    "x4               x     xxxxxxxxx                    x      xxxxx",
    "x4               x             x                               x",
    "x4               x             x                               x",
    "x4                                  xxxxx       xxx     xxxxxxxxx",
    "x4   xxxxxxxx                                    x             x",
    "x4                     x                         x             x",
    "x                      x                         x             x",
    "x                      x            xxxxxxxxxxxxxx       xxxxxxx",
    "x    xxx            oo x     11            x4                  x",
    "x           xxxxxxxxxxxx     xx            x4                  x",
    "x                            33            x4                  x",
    "x     x4                          oo       x4                = x",
    "x     xxx  xxxxxxxxxxx  xxxxxxx  xxx    xxxxxxxxxxx       xxxxxx",
    "x                x                                             x",
    "x                x                                             x",
    "x                x         xxxx                                x",
    "x                x                   xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "x                x                                             x",
    "x                x                                             x",
    "x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x"
];
var medium = [
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "x                    x                                        2x",
    "x                    3                                        2x",
    "x  @                                                111       2x",
    "xxxxxxxx      oo 11        x     1          xxx     xxx       2x",
    "x33          xxxxxxxxxxxxxxxxxxxxxx   xxx                     2x",
    "x                              x                              2x",
    "x                              x       1      xxxxxxxxxx       x",
    "x         2xxxxxxxxxxx    xxxxxx      2x                       x",
    "x         2x                  2x      2x                       x",
    "x4        2x                  2x o    2xxxxxxxxx      xxxxxxxxxx",
    "x4   xx   2xxxxxxx    2x      2xxx    2x4                      x",
    "x4               x    2x      2x      2x                       x",
    "x4               x    2x   oo 2x     o x                       x",
    "x4     2xxx4     x    2x   x  2x    xxxx   xxxxx     xxxxxxxxxxx",
    "x                             2x           33333     3333333333x",
    "x                             2x                               x",
    "x                     2x      2x              x  oo            x",
    "x                     2x      2x              xxxxxxx    xxxxxxx",
    "x                     2x      2x1111                           x",
    "x    xxx     oo       2x       xxxxxxx                         x",
    "x           xxxxx    xxxxx   xxx                               x",
    "x                             2x        xxx4 2xxx              x",
    "x     x                       2x                               x",
    "x     xx   xxxxxxxxxx    xxxxxxx                    xxxxxxxxxxxx",
    "x           33333x4                      oo  11     x333       x",
    "x                x4                     xxxxxxx     x          x",
    "xxxxxx           x4       111              333      x       oo x",
    "x4               x     xxxxxxxxx                    x      xxxxx",
    "x4               x            2x      xxxxxxx                  x",
    "x4               x            2x      x                        x",
    "x4                            2x    xxx        xxx     xxxxxxxxx",
    "x4   xxxxxxxx                  x                               x",
    "x4                     x4      x                               x",
    "x                      x4                   111                x",
    "x                      x            xxxxxxxxxxxxx        xxxxxxx",
    "x    xxx            oo x     11            x4                  x",
    "x           xxxxxxxxxxxx     xx            x4                  x",
    "x                            33            x4                  x",
    "x     x4                          oo       x4                  x",
    "x     xxx  xxxxxxxxxxx  xxxxxxx  xxx    xxxxxxxxxxx      xxxxxxx",
    "x                x                           3333         33333x",
    "x                x                                             x",
    "x                x                                          =  x",
    "x                x                   xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "x                x                                             x",
    "x                x                                             x",
    "x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x"
];
var hard = [
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "x              333    2x4      2x                             2x",
    "x                     2x4      2x                             2x",
    "x  @  oo                                            111       2x",
    "xxxxxxxx      oo           x                xxxxxxxxxxx       2x",
    "x33          xxxxxxxxxxxxxxxxxxxxxx   xxx           333       2x",
    "x                          3332x                         oo   2x",
    "x                             2x111111        xxxxxxxxxx       x",
    "x    xxx  2xxxxxxxxxxx    xxxxxxxxxxxxxx                       x",
    "x                x            2x                               x",
    "x4               x            2x11     xxxxxxxxx     2xxxxxxxxxx",
    "x4         xxxxxxx    2x4     2xxx     x4                      x",
    "x4               x    2x      2x       x4                      x",
    "x4               x    2x   oo 2x       x4              x       x",
    "x4         x4    x    2x   x  2x    xxxx   xxxxx     xxxxxxxxxxx",
    "x          x4                 2x           33333     3333333333x",
    "x     xxxxxx4                 2x     oo  x                     x",
    "x                     2x4     2x         x       oo            x",
    "x                     2x4     2x         x     xxxxxx    xxxxxxx",
    "x     oo               x4     2x111      x                     x",
    "x    xxx      oo       x4      xxxxxxx   x                     x",
    "x           xxxxxxxxxxxxxx   xxx                               x",
    "x                             2x        xxx   xxx              x",
    "x     x                       2x                               x",
    "x     xxx        xxxx    xxxxxxx                    xxxxxxxxxxxx",
    "x                x4         333    x4    oo         x333       x",
    "x                x4                x4    xxxxxx     x          x",
    "xxxxxx     x     x4                x4    x333       x       oo x",
    "x4         x     x     xxxxxxxxx         x          x      xxxxx",
    "x4         x                  2x         x                     x",
    "x4         x                  2x     1111x                     x",
    "x4         x                  2x    xxxxxx     xxx     xxxxxxxxx",
    "x4   xxxxxxxx                 2x                               x",
    "x4                     x4     2x       oo                      x",
    "x                      x4                                      x",
    "x                      x            xxxxxxxxxxxxx        xxxxxxx",
    "x    xxx            oo x     11            x4                 2x",
    "x           xxxxxxxxxxxx     xx            x4                 2x",
    "x                            33            x4                 2x",
    "x     x4                          oo       x4                 2x",
    "x     xxx  xxxxxxxxxxx  xxxxxxx  xxx    xxxxxxxxxxx           2x",
    "x          x     x4                       3333333              x",
    "x          x     x4         111                                x",
    "x          x     x4         xxx                             =  x",
    "x      xxxxx     x4                  xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "x                x                                             x",
    "x                x                                             x",
    "x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x"
];

var points = 0;
var lives = 3;

var player = {
    x: -250,
    y: -250
};

var tile_array = [];
var coin_array = [];
var spike_array = [];
var lava_array = [];

var colors = {
    wall: "#FFFFFF",
    lava: "#ff0000",
    player: "#ffa500",
    coin: "#ffd700",
    spike: "#7F7F7F",
    endTile: "#ea14a0"
};

var first_hit = true;
var playerIsSet = false;
var Direction = "";
var jumping = false;
var gameOver = false;
var selection = "";

var initialSetup = false;

function Tile(x, y) {
    this.x = x;
    this.y = y;
}
function Coin(x, y) {
    this.x = x;
    this.y = y;
}
function Spike(x, y) {
    this.x = x;
    this.y = y;
}
function Lava(x, y) {
    this.x = x;
    this.y = y;
}
function endTile(x, y) {
    this.x = x;
    this.y = y;
}

function setup() {
    createCanvas(1600, 1200);
    smooth(4);
    frameRate(60);
    noStroke();
}

function start(select) {
    player.x = 0;
    player.y = 0;
    selection = select;
    initialSetup = false;
    $ ( ".GameOver" ).html("");
}

function drawLevel() {
    var x = 0;
    var y = 0;
    tile_array = [];
    var arraySub = [];

    switch (selection) {
        case "easy":
            arraySub = easy;
            break;
        case "medium":
            arraySub = medium;
            break;
        case "hard":
            arraySub = hard;
            break;
    }

    for (var i = 0; i < arraySub.length; i++ )
    {
        var array = arraySub[i].split("");
        x = 0;
        for (var l = 0; l < array.length; l++)
        {
            if (array[l] === " ") {
                //Empty tile
            } else if (array[l] === "x") {
                //Wall tile
                fill(colors.wall);
                rect(x, y, 25, 25);

                var wall = new Tile(x,y);
                tile_array.push(wall);
            } else if (array[l] === "!") {
                //Lava tile
                var lava = new Lava(x, y);
                lava_array.push(lava);

                fill(colors.lava);
                rect(x, y, 25, 25);
            } else if (array[l] === "@") {
                //Player start tile
                if (!playerIsSet) {
                    //console.log("x: " + player.x + " y: " + player.y + " x: " + x + " y: " + y);
                    player.x = x;
                    player.y = y;
                    playerIsSet = true;
                }
            } else if (array[l] === "o") {
                //Coin tile
                if (!initialSetup) {
                    var c = new Coin(x, y);
                    coin_array.push(c);

                    fill(colors.coin);
                    ellipse(x, y, 15, 15);
                }
            } else if (array[l] === "=") {
                //Player Finish
                endTile.x = x;
                endTile.y = y;
                fill(colors.endTile);
                ellipse(x, y, 10, 10);
            } else if (array[l] === "1") {
                var s = new Spike(x, y);
                spike_array.push(s);

                fill(colors.spike);
                triangle(x, y + 25, x + 20, y + 25, x + 10, y);
            } else if (array[l] === "2") {
                var s = new Spike(x, y);
                spike_array.push(s);

                fill(colors.spike);
                triangle(x + 25, y, x + 25, y + 20, x, y + 10);
            } else if (array[l] === "3") {
                var s = new Spike(x, y);
                spike_array.push(s);

                fill(colors.spike);
                triangle(x, y, x + 20, y, x + 10, y + 25);
            } else if (array[l] === "4") {
                var s = new Spike(x, y);
                spike_array.push(s);

                fill(colors.spike);
                triangle(x, y, x, y + 20, x + 25, y + 10);
            }
            x = x + 25;
        }
        y = y + 25;
    }

    if (initialSetup) {
        fill(colors.coin);
        for (var m = 0;m < coin_array.length; m++) {
            ellipse(coin_array[m].x, coin_array[m].y, 15, 15);
        }
    }
    initialSetup = true;
}

function draw() {
    background(51);
    drawLevel();
    updatePoints();
    updateLives();

    if (!gameOver) {
        fill(204, 102, 0);
        rect(player.x, player.y, 25, 25);
    }

    if (hasCollided("spike")) {
        if (lives > 0) {
            lives--;
            //initialSetup = false;
            player.x = 0;
            player.y = 0;
            playerIsSet = false;
            drawLevel();
        } else {
            //The game quits
            gameOverScreen();
            gameOver = true;
        }
    }
    if (hasCollided("lava")) {
        if (lives > 0) {
            lives--;
            //initialSetup = false;
            player.x = 0;
            player.y = 0;
            playerIsSet = false;
            drawLevel();
        } else {
            //The game quits
            gameOverScreen();
            gameOver = true;
        }
    }
    if (hasCollided("ending")) {
        initialSetup = true;
        player.x = -250;
        player.y = -250;
        playerIsSet = false;
        selection = "";
        coin_array = [];
        drawLevel();
        $ ( ".GameOver" ).html("<div class='title'><h2>Welcome to JSPLATFORM!</h2>Choose a level</div><div class='easy' onclick='start(\"easy\")'>Easy</div><div class='medium' onclick='start(\"medium\")'>Medium</div><div class='hard' onclick='start(\"hard\")'>Hard</div>");
    }

    if (hasCollided("coin")) {
        points += 10;
    }

    if (keyIsDown(LEFT_ARROW)) {
        if (!hasCollided("left")) {
            player.x -= 15;
        }
    }
    if (keyIsDown(RIGHT_ARROW)) {
        if (!hasCollided("right")) {
            player.x += 15;
        }
    }
    if (keyIsDown(UP_ARROW)) {
        if (jumping === false) {
            jumping = true;
            if (!hasCollided("up")) {
                player.y -= 10;
            }
            jumping = false;
        }
    }

    if (!jumping && !hasCollided("down")) {
        player.y += 8;
    }
}

function hasCollided(direction) {
    if (direction === "coin") {
        for (var x = 0;x < coin_array.length; x++) {
            var hitCoin = collideRectRect(player.x, player.y, 25, 25, coin_array[x].x, coin_array[x].y, 15, 15);
            if (hitCoin) {
                coin_array.splice(x, 1);
                return true;
            }
        }
        return false;
    }
    if (direction === "spike") {
        for (var x = 0;x < spike_array.length; x++) {
            var hitSpike = collideRectRect(player.x, player.y, 25, 25, spike_array[x].x, spike_array[x].y, 25, 25);
            if (hitSpike) {
                return true;
            }
        }
        return false;
    }
    if (direction === "lava") {
        for (var x = 0;x < lava_array.length; x++) {
            var hitLava = collideRectRect(player.x, player.y, 25, 25, lava_array[x].x, lava_array[x].y, 25, 25);
            if (hitLava) {
                return true;
            }
        }
        return false;
    }
    if (direction === "ending") {
        return collideRectRect(player.x, player.y, 25, 25, endTile.x, endTile.y, 25, 25);
    }

    for (var index = 0; index < tile_array.length; index++)
    {
        var hit1;
        var hit2 = false;

        if (direction === "left") {
            hit1 = collideRectRect(player.x - 10, player.y - 5, 25, 25, tile_array[index].x, tile_array[index].y, 24, 24);
        } else if ( direction === "right" ) {
            hit1 = collideRectRect(player.x + 10, player.y - 10, 25, 25, tile_array[index].x, tile_array[index].y, 24, 24);
        } else if (direction === "up") {
            hit1 = collideRectRect(player.x, player.y - 12, 25, 25, tile_array[index].x, tile_array[index].y, 24, 24);
        } else if (direction === "down") {
            hit2 = collideRectRect(player.x , player.y , 25, 25, tile_array[index].x, tile_array[index].y, 25, 25);
            if (hit2) {
                return hit2;
            }
            hit1 = collideRectRect(player.x + 10, player.y, 25, 25, tile_array[index].x, tile_array[index].y, 25, 25);
        }

        hit2 = collideRectRect(player.x, player.y + 10, 25, 25, tile_array[index].x, tile_array[index].y, 24, 24);

        if (hit1 && !hit2) {
            //Normal hit no down
            console.log(direction);
            Direction = "";
            return true;
        }

        if (hit1 && hit2) {
            //Hit with down
            console.log(direction + " down");
            Direction = "down";
            return true;
        }
    }
    first_hit = true;
    return false;
}

function restart() {
    $ ( ".GameOver" ).html("");
    location.reload();
}

function gameOverScreen() {
    remove();
    $ ( ".GameOver" ).html("<div class='title'><h2>Game Over!</h2>Total points: " + points + "<br>Retry?</div><div class='yes' onclick='restart()'>Yes</div>");
}

function updatePoints() {
    $( ".score" ).html("Score: " + points);
}
function updateLives() {
    $( ".lives" ).html("Lives: " + lives);
}