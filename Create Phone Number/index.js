function createPhoneNumber(numbers){
  return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`

  return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx")
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3')
  return numbers.join('').replace(/(...)(...)(....)/, '($1) $2-$3')
}

createPhoneNumber=numbers=>'(###) ###-####'.replace(/#/g,()=>numbers.shift())
createPhoneNumber=numbers=>numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx")

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))