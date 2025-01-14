import React from 'react';
import {Mutation, Query, graphql} from 'react-apollo';
import {gql} from 'apollo-boost';
import {flowRight} from 'lodash';

import {GET_ITEM_COUNT} from "../../graphql/resolvers";
import CartIcon from './cart-icon.component';

const TOGGLE_CART_HIDDEN = gql`
    mutation ToggleCartHidden {
        toggleCartHidden @client
    }
`;

const CartIconContainer = ({data: {itemCount}, toggleCartHidden}) => (
     <CartIcon itemCount={itemCount} toggleCartHidden={toggleCartHidden} />
);

export default flowRight(
    graphql(GET_ITEM_COUNT),
    graphql(TOGGLE_CART_HIDDEN, {name: 'toggleCartHidden'})
)(CartIconContainer);