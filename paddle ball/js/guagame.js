
var Guagame = function(fps)
{
    var canva = document.querySelector('#id-canvas')
    var contxt = canva.getContext('2d')
    var g = {
        canvas: canva,
        contxt: contxt,
        actions: {},
        keydowns: {},
    }
    g.drawimage = function(Object)
    {
        contxt.drawImage(Object.image,Object.x, Object.y)
    }
    //events
    window.addEventListener('keydown', function(event)
    {
        g.keydowns[event.key] = true
    })

    //events
    window.addEventListener('keyup', function(event)
    {
        g.keydowns[event.key] = false
    })

    g.registerAction = function(key, callback)
    {
        g.actions[key] = callback
    }
    setInterval(function()
    {
        //获取actions的..注册过的?
        //g.actions存的是所有actions的key
        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++)
        {
            var key = actions[i]
            if (g.keydowns[key])
            {
                //如果按键被按下, 调用注册的action
                g.actions[key]()
            }
        }
        g.update()

        contxt.clearRect(0, 0, canva.width, canva.height)
        
        g.draw()

    }, 1000/fps)

    
    return g
}