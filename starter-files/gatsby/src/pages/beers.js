import { graphql } from 'gatsby';
import React from 'react';
import BeerList from '../components/BeerList';

export default function BeersPage({ data }) {
  const beers = data.beers.nodes;
  return (
    <>
      <h2 className="center">
        We have {beers.length} beers available! Dine in only!
      </h2>
      <BeerList beers={beers} />
    </>
  );
}

export const query = graphql`
  query BeerQuery {
    beers: allBeer {
      nodes {
        id
        name
        image
        price
        rating {
          reviews
          average
        }
      }
    }
  }
`;
