import React from 'react';
import {Query} from 'react-apollo';

import {GET_CART_HIDDEN} from "../../graphql/resolvers";
import Header from './header.component';

const ContainerOverviewContainer = () => (
    <Query query={GET_CART_HIDDEN} >
        {
            ({ data: {cartHidden} }) => {
                return <Header hidden={cartHidden} />
            }
        }
    </Query>
);

export default ContainerOverviewContainer;