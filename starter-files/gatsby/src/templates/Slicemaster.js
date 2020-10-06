import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const SlicemasterStyles = styled.div`
  text-align: center;

  .slicemaster-info {
    margin: 1rem auto;
  }
`;

export default function SlicemasterPage({ data }) {
  console.log('Query data:', data);
  const { slicemaster } = data;
  return (
    <SlicemasterStyles>
      <Img fluid={slicemaster.image.asset.fluid} alt={slicemaster.name} />
      <div className="slicemaster-info">
        <h2 className="mark">{slicemaster.name}</h2>
        <p>{slicemaster.description}</p>
      </div>
    </SlicemasterStyles>
  );
}

export const query = graphql`
  query($name: String!) {
    slicemaster: sanityPerson(name: { eq: $name }) {
      name
      description
      image {
        asset {
          fluid(maxHeight: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
