const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let acronyme = ""
const sortedNames=names.sort()
sortedNames
for (const name of sortedNames){
    console.log(name)
    acronyme=acronyme+name[0]
}

console.log(acronyme)