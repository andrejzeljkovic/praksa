var p = document.getElementsByTagName('p');
var izbor = document.getElementsByClassName('izbor');
var dragItem = null ;

for (var i of p) {
    i.addEventListener('dragstart',dragStart);
    i.addEventListener('dragend',dragEnd);
}

function dragStart() {
dragItem = this;
setTimeout(()=> this.style.display = "none",0);
}

function dragEnd (){
    setTimeout(()=> this.style.display = "block",0);
    dragItem = null;
}

for(j of izbor) {
    j.addEventListener('dragover',dragOver);
    j.addEventListener('dragenter',dragEnter);
    j.addEventListener('dragleave',dragLeave);
    j.addEventListener('drop',Drop);
}
function Drop() {
    this.append(dragItem);

}
function dragOver (e) {
    e.preventDefault();
    this.style.border = "2px dotted cyan";
}
function dragEnter (e) {
    e.preventDefault();
}
function dragLeave () {
this.style.border = "none";
}