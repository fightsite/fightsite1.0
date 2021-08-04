import { gql } from '@apollo/client';

export const USER_LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
        }
    }
`

export const ADD_USER = gql`
    mutation addUser($username: String! $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            getTokenuser {
                _id
                username
            }
        }
    }
`

export const UPDATE_USER = gql`
    mutation updateUser($email: String!, $balance: Int! ) {
        updateUser(email: $email, balance: $balance)
    }
`