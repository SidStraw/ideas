// import '../styles/globals.css'
import * as React from 'react'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
})

client
  .query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `,
  })
  .then(result => console.log(result), () => {})

function MyApp ({ Component, pageProps }: AppProps): React.ReactNode {
  return <Component {...pageProps} />
}
export default MyApp
