
#Instuctions

Use the Up, Down, Left, & Right keyboard keys to manipulate the snake. Eat the apples and avoid touching the snake's body and the game borders.


#What is the game about?

Snake is about growing a snake by eating randomly generating food on the gameboard while avoiding touching the sides of the board and the snake's own body. The more food items that are eaten the longer the snake grows and the faster is slides across the board.


#What features does it include?

1. A sliding snake
2. Randomly generating food
3. Death conditions tied to a gameover screen
4. Increasing game speed
5. Numerous Animation and sounds
6. Theme music



#Were there any particular pain points or unsolved problems you had to manage? (e.g. technological, timing, content, etc.)

Building a game engine!

After tweaking Drake's 2D game board function from tic-tac-toe for my game I was pretty much lost. So I just started styling the game, adding sounds, and animations. The same day I mapped keyboard values to empty functions I knew I would need down the line. The functions toggled the snake class on divs one by one starting from the center which is not what I wanted.

On Thursday I totally restyled the game.

Friday I spent most of the day rebuilding me gameboard, after receving conflicting advice from Gainor and Drake. Gainor essentially recommended a 1 dimentional gameboard with divs numbered between 1 - 1000. A few hours later Drake recommended using a 2D gameboard with a 2D array value and an object. So by the end of the day I still was where I started at the beginning of the day.

It wasn't until Saturday that I started to understand 2D arrays. After getting help from the SRC I got the logic I needed to make moving the snake possible which would I allow  me to add aditional features to the game.


#Is there any other information you think might help us understand what you've built?

The UI and the gamedata should ideally be separate when making a game. An update fuction should be used to update the UI based on that data.



List the technologies used

JavaScript
HTML
CSS

