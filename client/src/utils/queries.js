import { gql } from '@apollo/client';

export const GET_USER = gql`
    {
        user{
            _id
            username,
            password,
            email,
            balance
        }
    }
`