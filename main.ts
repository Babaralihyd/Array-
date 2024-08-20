
// // =================================Array==========================================

// //Arry are a  types of data  structure  used to store multiple value in a single  variable 

//  //string Array 

let ArrayStudents :string[] = ["bilawal" , "zeeshan " , "imran " , "babar ", ]

// Number Array 

let NumberStudent:number[] = [0,1,2,3,4,5]

// mixed Array 

let mixedArray : (string| number) [] =[1,2,3, "Hellow " ]

console.log(`Array students :${ArrayStudents}
 Number Student : ${NumberStudent} 
 Mixed Array :${mixedArray}`);

//  length Array 

let friends :string [] = [ 'faraz' , 'safeer', 'waqar', 'Aijaz']
let lengthArray = friends.length
console.log("Array length :", lengthArray);


//index of Array 


let index = friends[2] 
let index2 = friends.indexOf('Aijaz')



console.log(`find second number friends Name : ${index} 
Aijaz is  find in array number : ${index2}`);


// update  Array 

let schoolTecher :string [] = [ " Ibrahim " ,  "Mehak" ,  "Shakeel" ,  "Zeeshan" ]

schoolTecher[2]= "bilal" 
console.log(`update Teacher:   ${schoolTecher}   `);



//  Array of object : Array that contain  object 



let studentsdata = [ 
{ name : "ali " ,age : 16 ,score :60} ,
{ name : "zeeshan " ,age : 18 ,score :80} ,
{ name : "mehwish  " ,age : 20 ,score :75} ]

console.log(studentsdata[0].name);
console.log(studentsdata[2].age);

// update object zeeshan remove update faraz 

studentsdata[1].name = "faraz"
console.log(studentsdata);


// // Nested Array 

let nestedArray = [
    ["ali", "mehake", "imran"],
    ["akbar", "waqar", "asfa "],
    ["hakeem", "zafar", "sharif"]
];

// Accessing an element in the nested array

console.log(nestedArray[0][1]); // Output: mehake 
console.log(nestedArray[2][0]); // Output: hakeem

// update a new array to the nested array

nestedArray[2]= ["babar", "bilal", "aamir"];
console.log(nestedArray);

// push ()

// The push method aads  one or  more elements to the 
// end of an  array and  returns the new  length of array

let guest :string []= ['Rohaan', 'Faizan' , ' Ayaan']
guest.push('Arham', "ali") 
console.log(guest);


// pop()

// The pop method removes the last  element from  an array and  returns that 
// This  method changes  length of the array 

let ItStudents : string [] = [ 'Tahoor', 'Zabir', 'Yesoob' , ' Muzdahir']

ItStudents.pop()

console.log(ItStudents);


// unshift() 

// The unshift method adds one  or more elements to 
// The beggining of an array  and  returns the new  length of the array 


let family :string [] = [ 'Areesha ' , 'zubair ', 'safeer ' ]

family.unshift('Aisha','Sara')

console.log(family);


// shift Array

// The shifts thep first elemnent from  an array  and  returns that elements 
// This method changes the length of the array 
 
let shiftarray : string[]=['Ali ' , 'abbas'  , 'naveed ' , 'mujeeb'];
shiftarray.shift()
console.log(shiftarray);


// slice ()

// The slice mehod returns a shallow copy of a portion  of an array  into
//  A  new array object selected  from start to end (end not included).
// The  original  array will not  be modified.


let sliceArray :string[] =["Amal", "Afra", "Asma", "Aiza", "Aaliyah", "Afaaf"]

console.log(sliceArray);


console.log(sliceArray.slice(1,4));



// console.log(cutArray);


// splice ()

// This  method can be used for multiple  purposes.
// For 
// 1. add an element to an array 
// 2. Replace specific  elements within an array 
// 3.Remove specific elements from an array 


let spliceArray :string [] = ["Fatima" , "Aiza" , "Iqra ","Muskaan " , "dua "]


console.log(spliceArray.splice(1,3,"mehake" ,"noor "));

console.log(spliceArray);


// In programming, concatenating arrays means combining 
// two or more arrays into one. Here are examples in a few different name:

// concat array

let concatarray1 : string[]=['mehake ',  'Alina ' , 'mehwish ' ]  
let concatArray2 : string[]=['Nayab', 'Alisha ']  

let finalarray = concatarray1.concat(concatArray2);
console.log(finalarray);
