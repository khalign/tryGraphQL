import React from 'react';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';

import Collection from './collection.component';
import Spinner from '../../components/spinner/spinner.component';

const GET_COLLECTION = gql`
    query getCollectionsByTitle($title: String!) {
        getCollectionsByTitle(title: $title) {
            id
            title
            items {
                id
                name
                price
                imageUrl
            }
          }
    }
`;

const CollectionContainer = ({match}) => (
    <Query query={GET_COLLECTION} variables={{title: match.params.collectionId}} >
        {
            ({loading, error, data: {getCollectionsByTitle}}) => {
                if (loading) return <Spinner />
                return <Collection collection={getCollectionsByTitle}  />
            }
        }
    </Query>
)

export default CollectionContainer;