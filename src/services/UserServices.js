import { CognitoIdentityProviderClient, AdminCreateUserCommand, AdminDeleteUserCommand } from "@aws-sdk/client-cognito-identity-provider";
import { adminCredentials, userPoolID } from "../constants/AdminConfig";

export function createUser(username) {
//CREATE USER COGNITO
const config = {
    region: "us-east-1",
    credentials: {
        accessKeyId: 'AKIAXJB4I4EJXAREX2GN',
        secretAccessKey: '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'
    } 
}

    const newUserData = {
            UserPoolId: 'us-east-1_U9vwu5wnL',
            Username: username,
            DesiredDeliveryMediums: [
                'SMS'
            ],
            TemporaryPassword: 'Password@123',
            UserAtributes: [
                {
                    Name: 'email',
                    Value: username
                }
            ]
        }
    const client = new CognitoIdentityProviderClient(config);
        const command = new AdminCreateUserCommand(newUserData);
        return(
            client.send(command).then(res => res.data)
    )
}

export function deleteUser(username) { // DELETE USER COGNITO

    const input = {
        UserPoolId: userPoolID,
        Username: username
    }
    const client = new CognitoIdentityProviderClient(adminCredentials);
    const command = new AdminDeleteUserCommand(input);
    return (
        client.send(command).then(res => res.data)
    )
}
