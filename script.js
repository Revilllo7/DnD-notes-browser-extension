
function insertAfter( newEl, refEl ) {
    refEl.parentNode.insertBefore( newEl, refEl.nextSibling );
}

var editElement = getById('myContent');
var undoButton = getById('undo');
var SaveButton = getById('save');
var oirignalContent = editElement.innerHTML;
var updatedContent = "";



//  if the user refreshes the page, these reset everything
undoButton.disabled = true;
SaveButton.disabled = true;



// create redo button
var redoButton = document.createElement('button');
var redoLabel = document.createTextNode('redo')
redoButton.id = 'redo';
redoButton.className = 'button';
redoButton.hidden = true;
redoButton.appendChild(redoLabel);
insertAfter( redoButton, undo );



// if content changed, enable save
editElement.addEventListener('keypress', function () {
    if ( editElement.innerHTML !== originalContent ) {
        SaveButton.disabled = false;
    }
});



// save button updates to updatedContent var
SaveButton.addEventListener('click', function() {
    updatedContent = getById('myContent').innerHTML;
    
    if (updatedContent !== originalContent) {
        undoButton.disabled = false;
    }
});



// if you click undo, revert to original
undoButton.addEventListener('click', function() {
    editElement.innerHTML = updatedContent;
    this.hidden = true;
    undoButton.disabled = false;
    undoButton.focus();
});