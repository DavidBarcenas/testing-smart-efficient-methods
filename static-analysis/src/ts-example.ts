export 

function add (a: number, b:number) {
         return a + b;
}

interface User {
  name: {
    first: string;
    middle: string;
    last: string;
  }
}


function      getFullName (user: User): string {
  const {         first, middle, last} = user.name
  return [first, middle, last].filter(Boolean).join('')
}

add(1,2)
getFullName({name: {first: 'Roger', middle: 'Smith', last: 'Bass'}})