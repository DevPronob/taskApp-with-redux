const employee = {
  name: "pronob",
  address: { country: "Bangladesh", city: "Dhaka" },
};

const employee2 ={
    ...employee,
    name:"roy"
}

console.log(employee,employee2)

function add(a){
    return function(b){
return a+b
    }
}

console.log((4),(5))