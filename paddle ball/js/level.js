var levels = [
    [//1
        [0, 0],
        [300, 11],
    ],
    [//2
        [100, 100],
    ],
    [
        [0, 0],
        [122, 33],
        [44, 120],
    ],
]

var loadlevel = function(imagePath, n)
{
    n = n - 1
    var level = levels[n]
    var blocks = []
    for (i = 0; i < level.length; i++)
    {
        var p = level[i]
        var b = Block(imagePath, p)
        blocks.push(b)
    }
    return blocks
}