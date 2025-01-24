const num1 = new Array(10).fill(0).map((v,i) => i);
console.log(num1);
// filter()
const num2 = num1.filter(v => v%3-2);
console.log(num2);

// odd, even: filter()의 매개함수
const odd = v => v % 2;
const even = v => !(v % 2);
const num3 = num1.filter(odd);
const num4 = num1.filter(even);
console.log(num3);
console.log(num4);

const over3 = v => v > 3;
const lesseq4 = v => v <= 4;
const num5 = num1.filter(over3);
const num6 = num1.filter(lesseq4);
console.log(num5);
console.log(num6);

const names = ['John', 'Mary', 'Matthew', 'Sam', 'Douglass', 'Zee'];
const names_filter1 = names.filter(v => v.length >= 4);
const names_filter2 = names.filter(v => v >= 'S');
console.log(names_filter1);
console.log(names_filter2);

const people = [
{
  name: 'Ryu',
  age: 25
},
{
  name: 'Lee',
  age: 32
},
{
  name: 'Kim',
  age: 24
},
{
  name: 'Park',
  age: 22
},
{
  name: 'Jeon',
  age: 29
}];
const people_filter = people.filter(v => v.age <= 30);
const people_name = people_filter.map(v => v.name);
console.log(people_name);