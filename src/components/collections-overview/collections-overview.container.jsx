import React from 'react';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';

import CollectionOverview from './collections-overview.component';
import Spinner from '../spinner/spinner.component';

const GET_COLLECTIONS = gql`
{
  collections {
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

const ContainerOverviewContainer = () => (
    <Query query={GET_COLLECTIONS} >
        {
            ({loading, error, data}) => {
                if (loading) return <Spinner />
                return <CollectionOverview collections={data.collections} />
            }
        }
    </Query>
);

export default ContainerOverviewContainer;