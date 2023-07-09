const containers = document.querySelectorAll(".container");
let srcElement = null;
let srcIndex = null;

containers.forEach(singleContainer => {
	singleContainer.addEventListener("dragstart", dragStart, false);
	singleContainer.addEventListener("drop", dragDrop, false);
	singleContainer.addEventListener("dragend",dragEnd, false);
	singleContainer.addEventListener("dragover", dragOver, false);
});

// This Condition basically picking the element [dragging start]
function dragStart(e){
	// console.log(e.target.classList);
	if(e.target.classList[1] === "draggable"){
		e.target.style.opacity = '0.4';
		e.dataTransfer.setData("text/plain", e.target.textContent);
		srcElement = e.target;
		srcIndex = Array.from(e.target.parentNode.children).indexOf(e.target);
		console.log('srcIndex', srcIndex);
	}
}

// dragover event is used to provide visual feedback and control the behavior of the target element while the dragged element is being moved over it;
function dragOver(e){
	e.preventDefault();
}

// while the dragend event is used to perform cleanup tasks after the drag operation is complete.
function dragEnd(e){
	if(e.target.classList[1] === "draggable"){
		e.target.style.opacity = '1';
	}
}


//This Function will trigger 
function dragDrop(e){
	console.log(e.target.classList);
	if(e.target.classList[0] === "container"){
		if(e.target === srcElement.parentElement) return;
		const dropinglementText = e.dataTransfer.getData("text/plain");
		e.target.innerHTML += `<div class="item draggable" draggable="true">${dropinglementText}</div>`;
		if(srcElement){
			srcElement.remove();
		}
	}else if(e.target.classList[0]=== 'item'){
		// It is only required if we swap in smame container changing position
		const currentIndex = Array.from(e.target.parentNode.children).indexOf(e.target);
		console.log('currentIndex', currentIndex);
		if(srcIndex === currentIndex) return;
		swapElement(srcElement, e.target);
	}
}


function swapElement(el1, el2){
  var p2 = el2.parentNode, n2 = el2.nextSibling
  if (n2 === el1) {
    p2.insertBefore(el1, el2);
    return;
  }
  el1.parentNode.insertBefore(el2, el1);
  p2.insertBefore(el1, n2);

} 