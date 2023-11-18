
## Level 1
1. **APPEND \<text>\:** Appends the inputted string text to the document, starting from the current position of the cursor. The cursor ends up at the end of the added string.
2. **MOVE \<position>/:** Moves the cursor to the specified position within the document. If the specified position is out of bounds, it moves to the nearest available position.
3. **BACKSPACE:** Removes the character right before the cursor.

## Level 2
4. **SELECT \<left> \<right>\:** Selects the text between the left and right cursor positions or becomes a cursor position if the selection is empty. Any modification operation replaces the selected text and places the cursor at the end of the modified segment.
5. **COPY:** Copies the selected text to the clipboard.
6. **PASTE:** Appends text from the clipboard, overwriting the selected text.

## Level 3
7. **UNDO:** Restores the document to the state before the previous modification operation or REDO operation. The selection and cursor position are also restored.
8. **REDO:** Restores the document to the state before the previous UNDO operation, including the selection and cursor position. Multiple UNDO and REDO operations can be performed in a row.

## Level 4
9. **CREATE \<name>\:** Creates a blank text document with the given name, or ignores the operation if the file already exists. Modification history is stored individually for each document.
10. **SWITCH \<name>\:** Switches the active document to the specified name, restoring the cursor and selection state if the file exists. All operations from previous levels are executed on the active document.

Example:
For the provided commands, here is an example output:

```javascript
textEditor2_2(queries) = [
    "Hey",
    "Hey you",
    "Hey you, don't",
    "Hey you, don't ",
    "Hey you, don't let me down"
]

