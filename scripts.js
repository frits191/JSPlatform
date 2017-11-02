//JQUERY

var simpleLevelPlan = [
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "x                      x                                       x",
    "x                      x                                       x",
    "x  @  oo                                       xxx             x",
    "xxxxxxxx    o o                             xxx     xxx        x",
    "x         xxxxxxxxxxxxxxxxxxxxxxxxx   xxx                      x",
    "x                              x                               x",
    "x     x                   xx   x              xxxxxxxxxx       x",
    "x     xxx  xxxxxxxxxxx  xxxxxxxx   xxxxx                       x",
    "x                x             x       x                       x",
    "x                x             x       xxxxxxxxx               x",
    "x          xxxxxxx             xxxx    x                       x",
    "x                x             x       x                       x",
    "x                x             x       x                       x",
    "x                x             x    xxxx             xxxxxxxxxxx",
    "x                              x                               x",
    "x     xxxxxx                   x                               x",
    "x                      x       x                               x",
    "x                      x       x               xxxxxx    xxxxxxx",
    "x     oo               x     = x                               x",
    "x    xxx    o o        x       xxxxxxx                         x",
    "x           xxxxxxxxxxxxxx   xxx                               x",
    "x                              x        xxx   xxx              x",
    "x     x                   xx   x                               x",
    "x     xxx  xxxxxxxxxxx  xxxxxxxx                               x",
    "x                x             x                               x",
    "x                x             x                               x",
    "x                x             x                               x",
    "x                x             x                               x",
    "x                x             x                               x",
    "x                x             x                               x",
    "x                                                              x",
    "x                                                              x",
    "x                      x                                       x",
    "x                      x                                       x",
    "x     oo               x     =                                 x",
    "x    xxx    o o        x                                       x",
    "x           xxxxxxxxxxxxxx   xx                                x",
    "x                                                              x",
    "x     x                   xx                                   x",
    "x     xxx  xxxxxxxxxxx  xxxxxxx                                x",
    "x                x                                             x",
    "x                x                                             x",
    "x                x                                             x",
    "x                x                                             x",
    "x                x                                             x",
    "x                x                                             x",
    "x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x"
];
var player = {
    x: 0,
    y: 0
};
var tile_array = [];
var colors = {
    wall: "#FFFFFF",
    lava: "#ff0000",
    player: "#ffa500",
    coin: "#ffd700"
};

var prevSide;
var first_hit = true;
var playerIsSet = false;
var Direction = "";
var jumping = false;

function Tile(x, y) {
    this.x = x;
    this.y = y;
}

function setup() {
    createCanvas(1600, 1200);
    smooth(4);
    frameRate(60);
    noStroke();
}

function drawLevel() {
    var x = 0;
    var y = 0;
    tile_array = [];

    for (var i = 0; i < simpleLevelPlan.length; i++ )
    {
        var array = simpleLevelPlan[i].split("");
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
                fill(colors.coin);
                ellipse(x, y, 15, 15);
            } else if (array[l] === "=") {
                //Player Finish
            }
            x = x + 25;
        }
        y = y + 25;
    }
}

function draw() {
    background(51);
    drawLevel();
    fill(204, 102, 0);
    rect(player.x, player.y, 25, 25);

    if (keyIsDown(LEFT_ARROW)) {
        if (!hasCollided("left")) {
            player.x -= 10;
        }
    }
    if (keyIsDown(RIGHT_ARROW)) {
        if (!hasCollided("right")) {
            player.x += 10;
        }
    }
    if (keyIsDown(UP_ARROW)) {
        if (jumping === false) {
            jumping = true;
            for (var i = 0; i < 2; i++) {
                if (!hasCollided("up")) {
                    player.y -= 10;
                }
            }
            jumping = false;
        }
    }
    if (!jumping && !hasCollided("down")) {
        player.y += 5;
    }
}

function hasCollided(direction) {
    for (var index = 0; index < tile_array.length; index++)
    {
        var hit1;
        var hit2 = false;

        if (direction === "left") {
            hit1 = collideRectRect(player.x - 10, player.y - 5, 25, 25, tile_array[index].x, tile_array[index].y, 24, 24);
        } else if ( direction === "right" ) {
            hit1 = collideRectRect(player.x + 10, player.y - 10, 25, 25, tile_array[index].x, tile_array[index].y, 24, 24);
        //} else if (direction === "up") {
            //hit1 = collideRectRect(player.x, player.y - 10, 25, 25, tile_array[index].x, tile_array[index].y, 24, 24);
        } else if (direction === "down") {
            hit2 = collideRectRect(player.x , player.y , 25, 25, tile_array[index].x, tile_array[index].y, 24, 24);
            if (hit2) {
                return hit2;
            }
            hit1 = collideRectRect(player.x + 10, player.y - 10, 25, 25, tile_array[index].x, tile_array[index].y, 24, 24);
        }

        hit2 = collideRectRect(player.x, player.y + 10, 25, 25, tile_array[index].x, tile_array[index].y, 24, 24);

        if (hit1 && !hit2) {
            //Normal hit no down
            //console.log(direction);
            Direction = "";
            return true;
        }

        if (hit1 && hit2) {
            //Hit with down
            //console.log(direction + " down");
            Direction = "down";
            return true;
        }
    }
    first_hit = true;
    return false;
}