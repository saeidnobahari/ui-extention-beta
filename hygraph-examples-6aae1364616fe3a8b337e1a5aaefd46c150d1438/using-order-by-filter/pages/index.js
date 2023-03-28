import { gql, GraphQLClient } from 'graphql-request';
import useSWR from 'swr';
import { useState } from 'react';

const hygraph = new GraphQLClient(
  'https://api-eu-central-1.hygraph.com/v2/ck8sn5tnf01gc01z89dbc7s0o/master'
);

const GetProductsQuery = gql`
  query GetProductsQuery($orderBy: ProductOrderByInput = price_ASC) {
    productsConnection(orderBy: $orderBy) {
      edges {
        node {
          name
          price
        }
      }
      aggregate {
        count
      }
    }
  }
`;

export const getStaticProps = async () => {
  const initialData = await hygraph.request(GetProductsQuery);

  return {
    props: {
      initialData,
    },
    revalidate: 30,
  };
};

export default function IndexPage({ initialData }) {
  const [orderBy, setOrderBy] = useState('price_ASC');

  const { data } = useSWR(
    [GetProductsQuery, orderBy],
    (query, orderBy) => hygraph.request(query, { orderBy }),
    {
      initialData,
      revalidateOnMount: true,
    }
  );

  return (
    <div>
      <fieldset>
        <legend>Order By</legend>
        <select onChange={(e) => setOrderBy(e.target.value)} value={orderBy}>
          {[
            { label: 'Price asc.', value: 'price_ASC' },
            { label: 'Price desc.', value: 'price_DESC' },
          ].map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </fieldset>

      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading'}
    </div>
  );
}
