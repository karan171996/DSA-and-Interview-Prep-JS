const getPathFromChildToParent = (parent, child) => {
	let currentNode = child;
	const pathArray = [];
	while(currentNode !== parent){
		const parentElement = currentNode.parentElement;
		const children = Array.from(parentElement.children);
		pathArray.push(children.indexOf(currentNode));
		currentNode = parentElement;
	}
	return pathArray;
	console.log('pathArray', pathArray)
}

const valueFromPath = (parent, path) => {
	let currentNode = parent;
	console.log('currentNode', currentNode, currentNode.children);
	while(path.length > 0){
		console.log('path before', path)

		currentNode = currentNode.children[path.pop()];
				console.log('path after', path)

	}
	return currentNode.textContent;
}

const findNodeValue = () => {
	const rootA = document.getElementById('rootA');
	const rootB = document.getElementById('rootB');
	const nodeA = document.getElementById('nodeA');

	const path = getPathFromChildToParent(rootA, nodeA);
	return valueFromPath(rootB, path);
}

console.log(findNodeValue());