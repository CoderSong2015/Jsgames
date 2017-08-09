
var __main = function()
{
    var imagePath = 'image/'
    var game = Guagame(30)
    
    var paddle = Paddle(imagePath)
    var ball = Ball(imagePath)
    
    var paulsed = true
    var blocks = loadlevel(imagePath, 1)

    window.addEventListener('keydown', function(event)
    {
        var k = event.key
        if ('123456'.includes(Number(k)))
        {
            log('cccc')
            blocks = loadlevel(imagePath, Number(k))
        }
    })
    game.registerAction('a', function()
    {
        paddle.moveLeft()
    })
    game.registerAction('d', function()
    {
        paddle.moveRight()
    })

    game.registerAction('f', function()
    {
        ball.fired = true        
    })

    game.registerAction('p', function()
    {
        paulsed = !paulsed        
    })
    game.update = function()
    {
        if (!paulsed)
        {
            return
        }
        ball.move()   
        if (paddle.collide(ball))
        {
            ball.speedy *= -1
            /*
            if (ball.speedx > 0 &&　!paddle.collidex(ball))
            {
                ball.speedx *= (1 - Math.abs())　　　　　　
            }
            if (ball.speedx < 0 && paddle.collidex(ball))
            {
                ball.speedx *= -1.5
            } 
             */
        }
        for(var i = 0; i < blocks.length; i++)
        {
            if (blocks[i].alive && blocks[i].collide(ball))
            {
                log('相撞')
                blocks[i].kill()
                ball.speedy *= -1
            }
        }
    }
    game.draw = function()
    {
        game.drawimage(paddle)
        game.drawimage(ball)

        for(var i = 0; i < blocks.length; i++)
        {
            if (blocks[i].alive)
            {
                game.drawimage(blocks[i])
            }
        }
        
    }
    
}