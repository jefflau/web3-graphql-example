import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GET_WEB3 = gql`
  query web3 {
    web3 {
      accounts
    }
  }
`

class App extends Component {
  render() {
    return (
      <Query query={GET_WEB3}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading web3</div>
          const { web3 } = data
          return (
            <div className="App">
              {console.log(data)}
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
              </header>
              <div>
                {web3.accounts.length > 0
                  ? `Hello ${web3.accounts[0]}`
                  : 'Unlock metamask!'}
              </div>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default App
