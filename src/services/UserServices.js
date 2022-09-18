import {
    CognitoIdentityProviderClient,
    AdminCreateUserCommand,
    AdminDeleteUserCommand,
    ListUsersCommand
} from "@aws-sdk/client-cognito-identity-provider";
import { adminCredentials, userPoolID } from "../constants/AdminConfig";

const client = new CognitoIdentityProviderClient(adminCredentials);

export function createUser(phone_number) { //CREATE USER COGNITO
    const newUserData = {
        UserPoolId: userPoolID,
        Username: phone_number,
        DesiredDeliveryMediums: [
            'SMS'
        ],
        TemporaryPassword: 'Password@123',
        UserAttributes: [
            {
                Name: 'phone_number_verified',
                Value: 'true'
            },
            {
                Name: 'phone_number',
                Value: phone_number
            },
        ]
    }
    const command = new AdminCreateUserCommand(newUserData);
    return (
        client.send(command)
            .then(res => console.log(res.data))
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
            .then(res => res.data)
            .catch(function (err) {
                console.log(err.message);
            })
    )
}

export function userList() {

    const input = {
        UserPoolId: userPoolID,
        AttributesToGet: ['email']
    }
    const client = new CognitoIdentityProviderClient(adminCredentials);
    const command = new ListUsersCommand(input)
    return (
        client.send(command)
            .then(res => res.data)
            .catch(function (err) {
                console.log(err.message)
            }
            )
    )
}
