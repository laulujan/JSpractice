let array = [{
    Name: "laura",
    Tel: 43546234,
    gender: "Female",
    location: "mxn",
},
{
    Name: "pau",
    Tel: 84848484,
    gender: "Female",
    location: "mxn",
},
{
    Name: "geo",
    Tel: 12121212,
    gender: "Female",
    location: "mxn",
},
{
    Name: "dani",
    Tel: 54545454,
    gender: "Male",
    location: "mxn",
},
{
    Name: "vane",
    Tel: 96969696,
    gender: "Female",
    location: "mxn",
},
];

const sorting = (data) => {
    data.sort((a, b) =>{
        return a.Name > b.Name ? 1 :  a.Name < b.Name ? -1 : 0;
    });
}
sorting(array);
console.log(array);

const filtering = (data, prop, value) =>{
    return data.filter(x => x[prop] === value);
};
const filteredArray = filtering(array, "Name", "geo");
console.log(filteredArray);

const grouping = (data, prop) => {
    return data.reduce((current, x) => {
        if(!current[x[prop]]){
            current[x[prop]] = [];
        }
        current[x[prop]].push(x);
        return current;
    }, {});
}

const groupedArray = grouping(array, 'gender');
console.log(groupedArray);

const mappingColors  = data => {
    return data.map(x =>{
        return {...x, color: x.gender === "Male" ? "Red" : "Green"}
    });
}

sorting(array);
const finalArray = grouping(
    mappingColors(filtering(array, "location", "mxn")),
    "gender"
);
console.log(finalArray);
