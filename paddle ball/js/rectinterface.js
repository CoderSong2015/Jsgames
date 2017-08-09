
var rectInterface = function(o, ball)
{
    var midpx = o.x + o.image.width / 2
    var midpy = o.y + o.image.height / 2
    var bx = ball.x + ball.image.width / 2
    var by = ball.y + ball.image.height / 2
    var tx = (Math.abs(midpx - bx) < (o.image.width + ball.image.width) / 2)
    var ty= (Math.abs(midpy - by) < (o.image.height + ball.image.height) / 2)
    if( tx && ty)
    {
        return true
    }
    else
    {
        return false
    }
}
