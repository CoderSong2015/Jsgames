
var Block = function(imagepath, position)
{
    var img = imageFromPath(imagepath + 'block.png')
    var p = position
    var o = {
        image: img,
        x: p[0],
        y: p[1],
        w: 50,
        h: 20,
        alive: true,
    }
    
    o.kill = function()
    {
        o.alive = false
    }
    o.collide = function(ball)
    {
        return rectInterface(o, ball) || rectInterface(ball, o)
    }
    return o
}