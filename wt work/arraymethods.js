
// //find
const array1 = [5, 121, 81, 1301, 441];

const found = array1.find((element) => element > 10);

console.log(found);

// // some 
// ama true return thai jo  ee condition contain hoi toh
const even = (Element) => Element%2==0;
console.log(array1.some(even));

// every => some ni jem j pan ama badha element ni condition schi thavi joi
const odd = (element) => element %2 != 0;
console.log(array1.every(odd));

// filter => ama conditon ma ji sacha hoi ee badha j print thai
const threedigit = array1.filter((no)=>no>99&&no<1000);
console.log(threedigit)

// for each => for each loop jevu kai condition vagar badha print thai
array1.forEach((no)=>console.log(no))

// reduce  ama call back function use thai ane ee paramne exceution thai
const intial =0;
const sumWithIntial = array1.reduce(
    (acculamator,curr) => {
        acculamator+curr,intial
    }
);
console.log(sumWithIntial)


//map => new array banve conditon mathi jii anss ave ene store karva mate
const map1= array1.map((x)=>x*2);
console.log(map1)

