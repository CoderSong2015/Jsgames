
var __main = function()
{
    var imagePath = 'image/'
    var game = Guagame(30)
    
    var paddle = Paddle(imagePath)
    var ball = Ball(imagePath)
    
    var paulsed = true
    var blocks = loadlevel(imagePath, 1)
    var score = 0
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
        }
        for(var i = 0; i < blocks.length; i++)
        {
            if (blocks[i].alive && blocks[i].collide(ball))
            {
                blocks[i].kill()
                ball.speedy *= -1
                score += 100
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
        
        game.contxt.fillText('分数:' + score, 10, 290)
    }
    
}