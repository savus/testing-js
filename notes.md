BUG - Phone Input on Form:

- Phone inputs would switch focus to next and previous input fields when arrowkeys or spacebar were pressed
- Phone inputs would be unresponsive if input had no characters and user typed delete key

SOLUTION - Set phone onchange handler to work like a react state hook by updating all three fields whenever a key is typed. Prevented handler from switching focus when arrow keys or spacebar exclusively were pressed.

BUG - local image paths would cause mime/type error when attempting to import them as a variable in javascript document.

SOLUTION - instead of importing the path using the import <variable name> from "..file/path", initializing variables with the path name using an equals sign works just fine
ex: const image1 = "../assets/images/image-1.jpg"
