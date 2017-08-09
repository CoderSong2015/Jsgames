

var Paddle = function(imagepath)
{
    var img = imageFromPath(imagepath + 'paddle.png')

    var o = {
        image: img,
        x: 100,
        y: 230,
        speed: 5,
    }
    o.moveLeft = function() 
    {
        o.x -= o.speed
        if (o.x < 0)
        {
            o.x = 0
        }
    }
    o.moveRight = function()
    {
        o.x += o.speed
        if (o.x > 400 - o.image.width)
        {
            o.x = 400 - o.image.width
        }
    }
    o.collide = function(ball)
    {
        /*
        if ((ball.y + ball.image.height > o.y) 
             && (ball.x + ball.image.width > o.x)
             && (ball.x  < o.x + o.image.width))
        {
            return true
        }
        return false
        */
        var midpx = o.x + o.image.width / 2
        var midpy = o.y + o.image.height / 2
        var bx = ball.x + ball.image.width / 2
        var by = ball.y + ball.image.height / 2
        var tx = (Math.abs(midpx - bx) < (o.image.width + ball.image.width) / 2)
        var ty= (Math.abs(midpy - by) < (o.image.height + ball.image.height) / 2)

        if (tx && ty)
        {
            return true
        }
        return false
    }
    o.collidex =function(ball)
    {
        var midpx = o.x + o.image.width / 2
        var bx = ball.x + ball.image.width / 2
        if (bx > midpx)
        {
            return true
        }
        return false
    }
    return o
}