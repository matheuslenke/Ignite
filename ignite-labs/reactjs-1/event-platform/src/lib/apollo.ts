import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4on8nw90gsu01xxh9va4gvi/master',
    cache: new InMemoryCache()
})