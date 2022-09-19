import {
    CognitoIdentityProviderClient,
    AdminCreateUserCommand,
    AdminDeleteUserCommand,
    ListUsersCommand
} from "@aws-sdk/client-cognito-identity-provider";
import { adminCredentials, userPoolID } from "../constants/AdminConfig";

const client = new CognitoIdentityProviderClient(adminCredentials);

export function createUser(phone_number,name) { //CREATE USER COGNITO
    const newUserData = {
        UserPoolId: userPoolID,
        Username: phone_number,
        DesiredDeliveryMediums: [
            'EMAIL'
        ],
        TemporaryPassword: 'Password@123',
        UserAttributes:[
            {
                Name: 'email',
                Value: phone_number
            },
            {
                Name: 'name',
                Value: name
            }
        ]

    }
    const command = new AdminCreateUserCommand(newUserData);
    return (
        client.send(command)
            .then(res =>res)
            .catch(function (err) {
                console.log(err.message);
            })
    )
}

export function deleteUser(username) { // DELETE USER COGNITO

    const input = {
        UserPoolId: userPoolID,
        Username: username
    }
    const command = new AdminDeleteUserCommand(input);
    return (
        client.send(command)
            .then(res => res.User)
            .catch(function (err) {
                console.log(err.message);
            })
    )
}

export function usersList() {

    const input = {
        UserPoolId: userPoolID,
        AttributesToGet: ['email', 'name']
    }
    const client = new CognitoIdentityProviderClient(adminCredentials);
    const command = new ListUsersCommand(input)
    return (
        client.send(command)
            .then(res => res.Users)
            .catch(function (err) {
                console.log(err.message)
            }
            )
    )
}
