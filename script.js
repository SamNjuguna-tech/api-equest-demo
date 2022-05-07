const profileDiv = document.querySelector('#profile')

let html="";
async function fetchData(){
	const api_url = "https://reqres.in/api/users?page=2"

	try{
		//retueve the data
		let res = await fetch(api_url)
		//inspect the response code 200 = successful 
		if(res.status==200){
			//parse the data in json format
			const responseObject = await res.json()
			const data = responseObject.data;
		// map the data to html template
		data.map(elem =>{
			let htmlSegment =`<div class="container"> 
			<div class="avatar">
			<img src="${elem.avatar}">
			</div>
			<p class="name"> ${elem.first_name} ${elem.last_name}</p>
			<p class="email">${elem.email}</p>
			</div>
			`;
			html+=htmlSegment
		})
		profileDiv.innerHTML=html
		}
		
	}catch (error){
		console.log(error)
	}

}

fetchData()