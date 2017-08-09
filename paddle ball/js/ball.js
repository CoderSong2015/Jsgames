var Ball = function(imagepath)
{
    var img = imageFromPath(imagepath + 'ball.png')

    var o = {
        image: img,
        x: 100,
        y: 208,
        speedx: 5,
        speedy: 5,
        fired: false,
    }

    o.move = function()
    {
        if (o.fired)
        {
            if (o.x < 0 || o.x > 380)
            {
                o.speedx = -o.speedx
            }
            if (o.y < 0 || o.y > 278)
            {
                o.speedy = -o.speedy
            }
            o.x += o.speedx
            o.y -= o.speedy
        }
        
    }

    return o
}