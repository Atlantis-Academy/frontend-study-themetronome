/* eslint-disable no-console */

const employers: string[] = [
  'Alex',
  '',
  'ludmila',
  'Victor',
  '',
  'oleg',
  'iNna',
  'Ivan',
  'Alex',
  'Olga',
  ' Ann',
]

const employersNames: string[] = []
for (let i: number = 0; i < employers.length; i += 1) {
  if (employers[i].length > 0 && employers[i] !== '') {
    employersNames.push(employers[i])
  }
}
for (let i: number = 0; i < employersNames.length; i += 1) {
  employersNames[i] = employersNames[i].toLowerCase().trim()
}

const sponsors: { cash: number[]; eu: string[]; rus: string[] } = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO'],
}

function calcCash(own = 0, ...everyCash: (string | number)[][]) {
  let total = own
  for (let i = 0; i < everyCash[1].length; i += 1) {
    total += +everyCash[1][i]
  }
  return total
}

const money = calcCash(...sponsors.cash)

function makeBusiness(owner: string, director: string = 'Victor', cash: number, emp: string[]) {
  const sumSponsors = [...sponsors.eu, ...sponsors.rus, 'unexpected sponsor']
  console.log(
    `We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`,
  )
  console.log('And we have a sponsors: ')
  console.log(...sumSponsors)
  console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`)
}
makeBusiness('Sam', undefined, money, employersNames)
