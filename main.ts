scene.setBackgroundColor(9)
let ninja = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f . 2 . . . . . 
    . . . . f f f f f 2 . . . . . . 
    . . . . f 1 d 1 f . 2 . . . . . 
    . . . . f f f f f . . . . . . . 
    . . f f f f f f f f f . . . . . 
    . . f f f f f f f f f . . . . . 
    . . f f f f f f f f f . . . . . 
    . . f f f f f f f f f . . . . . 
    . . f f f f f f f f f . . . . . 
    . . 2 2 f f f f f 2 2 . . . . . 
    . . . . f f . f f . . . . . . . 
    . . . . f f . f f . . . . . . . 
    . . . . f f . f f . . . . . . . 
    . . . . 2 2 . 2 2 . . . . . . . 
    . . . . f f . f f . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(ninja, 100, 0)
tiles.setCurrentTilemap(tilemap`level2`)
ninja.ay = 200
