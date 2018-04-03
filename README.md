# GraphQL Web3 Example

This repo is a Proof of concept for Graphql in a web3 dapp. It uses the old version of web3 (0.19.0) for stability and has been scaffolded with `create-react-app`.

It uses `apollo-link-schema` to make a client-side only graphql resolver that allows you to run arbitrary functions and essentially allows you to 'translate' your queries into function calls that can do anything. In my example I am making fetch calls to get data as well as access data from the blockchain via web3.

## Installation

```bash
yarn install
yarn start
```

Open your browser at localhost:3000 and open metamask
