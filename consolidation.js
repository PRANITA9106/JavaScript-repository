/*async function getData(){
	var url="https://jsonplaceholder.typicode.com/users";
	try{
		const response = await fetch(url);
		const json = await response.json();
		//for(k in json){
			//console.log(k.id,k.name,k.role,k.age)
		//}
		console.log(json);
	}
	catch(error){
		console.log(error.message);
	}
}
getData();
*/

function frequencyCounter(data){

frequency={}
for(let i=0;i<data.length;i++){
	if(frequency[data[i].role]==undefined)
		frequency[data[i].role]=1
	else
		frequency[data[i].role]++
}
console.log(frequency);
}

function searchData(data,term){
	let res=data.filter((obj)=>{

		return obj.role==term;
	});
	console.log(res);
}

function sortByAge(data){
	let res=data.sort((a,b)=>{
		return a.age-b.age
	})
	console.log(res);
}

function sortByName(data){
	let res=data.sort((a,b)=> a.name.localeCompare(b.name));
	console.log(res);
}
function allInOne(data,term){
	res=data.filter((obj)=>{

		return obj.role==term;
	})
	.map((data)=>data.name)
	.sort((a,b)=>{
		return a.age-b.age
	})
	return frequencyCounter(res)
}

function avgAge(data){
	let sum=0
	data.forEach(()=>console.log(this.age))
	console.log(sum)
	
}
var data= [

    { "id": 1, "name": "Alice", "role": "Admin", "age": 25 },
    { "id": 2, "name": "Bob", "role": "Viewer", "age": 30 },
    { "id": 3, "name": "Charlie", "role": "Editor", "age": 35 }
]
frequencyCounter(data)
searchData(data,'Admin')
sortByAge(data)
sortByName(data)
console.log(allInOne(data,"Editor"))
avgAge(data)
