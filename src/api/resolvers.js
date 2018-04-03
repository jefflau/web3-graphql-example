import 'isomorphic-fetch'
import getWeb3, { getAccounts } from './web3'

const users = {
  //singleton could hold local state
  doug: {
    id: 8,
    name: 'Doug Funnie',
    url: 'http://doug.wikia.com/wiki/Doug_Funnie',
    avatar: {
      url:
        'https://vignette.wikia.nocookie.net/doug/images/4/42/Doug01.jpeg/revision/latest'
    }
  },
  patty: {
    id: 17,
    name: 'Patty Mayonnaise',
    url: 'http://doug.wikia.com/wiki/Patti_Mayonnaise',
    avatar: {
      url:
        'https://vignette.wikia.nocookie.net/doug/images/4/41/Patti_2.jpg/revision/latest'
    }
  }
}

const resolvers = {
  Web3: {
    accounts: () => getAccounts()
  },
  Query: {
    loggedInUser: () => users.doug, // could be local state
    web3: () => getWeb3(), // data from the blockchain
    people: () =>
      // could call to any backend or REST api
      fetch('https://emerald-ink.glitch.me/people')
        .then(res => res.json())
        .then(people =>
          people.map(person => ({
            name: person.name,
            id: person.id,
            image: person.image
          }))
        )
  }
}

export default resolvers
