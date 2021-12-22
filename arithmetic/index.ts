let arr:string[] = ['*', 'b', 'd', 'e', 'a', '*', '*']
let brr:string[] = []
arr.forEach((item, index) => {
  if (item === '*') {
    brr.push('*')
  }
})

const filter = arr.filter(item => item !== '*')

console.log('==> arr:', arr);
console.log('==> brr:', brr);
console.log('==> filter:', filter);
console.log('==> target:', [...brr, ...filter])