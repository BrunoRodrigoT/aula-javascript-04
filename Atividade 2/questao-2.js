let times = ['Santos', 'Sport', 'Santa Cruz', 'Vasco', 'Chapecó'];

times.splice(5, 1,'Flamengo');
console.log(times)

times.shift()
console.log(times)

times.unshift('Palmeiras')
console.log(times)

times.splice(6, 1, 'Grêmio')
console.log(times)

times.unshift('São Paulo', 'Santos')
console.log(times)

console.log(times.length)

times.pop()
console.log(times)

times.sort()
console.log(times)

