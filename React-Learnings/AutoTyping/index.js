const states = ['Rajasthan', 'Bihar', 'Jharkhand', 'Assam', 'Delhi'];

const inputField = document.querySelector('.input-field');
const searchOptionsField = document.querySelector('.search-options');

inputField.addEventListener('keydown', searchString);


function searchString(e){
	searchOptionsField.innerHTML = '';
	const value = e.target.value;


	let searchData = states.filter(item => value.toLowerCase() === item.substr(0, value.length).toLowerCase());
	console.log('searchData', searchData);
	
	if(value === ''){
		searchData = states;
	}

	searchData.forEach(item => {
		const pTags = document.createElement('p');

		const pText = document.createTextNode(item);
		pTags.appendChild(pText);
					searchOptionsField.appendChild(pTags);

	});

	console.log("searchOptionsField", searchOptionsField);
}

function debounce(fn, timeout=180){
	let timer;
	return function(...args){
		clearTimeout(timer);
		timer = setTimeout(() => fn.apply(this, args), timeout)
	}
}


function saveInput(){
	console.log('Save data');
}

const processChange = debounce(() => saveInput())