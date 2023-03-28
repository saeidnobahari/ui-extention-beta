import { gql } from 'graphql-request';

import { hygraph } from '../../lib/_hyraph';

const limit = 1;

function IndexPage({ products }) {
  return products.map(({ node: product }) => (
    <pre>{JSON.stringify(product, 2, null)}</pre>
  ));
}

export async function getStaticProps() {
  const query = gql`
    query indexPageQuery($limit: Int!, $offset: Int!) {
      productsConnection(first: $limit, skip: $offset) {
        products: edges {
          node {
            id
            name
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  `;

  async function* fetchData(query) {
    let offset = 0;
    let hasNextPage = true;

    while (hasNextPage) {
      const {
        productsConnection: { products, pageInfo },
      } = await hygraph.request(query, { limit, offset });

      hasNextPage = pageInfo.hasNextPage;
      offset += limit;

      yield products;
    }
  }

  async function paginatedQuery({ query }) {
    const iterator = fetchData(query);

    let data = [];

    for await (const products of iterator) data = [...data, ...products];

    return data;
  }

  const products = await paginatedQuery({ query });

  return {
    props: {
      products,
    },
  };
}

export default IndexPage;
