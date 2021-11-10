import User, { IUser } from '../models/user.model';
import { ObjectId, UpdateQuery } from 'mongoose';

async function CreateUser({
    email,
    name
}: UpdateQuery<IUser>): Promise<IUser> {
    return User.create({
        email,
        name,
    })
        .then((data: IUser) => {
            return data;
        })
        .catch((error: Error) => {
            throw error;
        });
}

async function GetUser(id: string | ObjectId): Promise<IUser | null> {
    return User.findById(id)
        .then((data) => {
            return data;
        })
        .catch((error: Error) => {
            throw error;
        });
}

export {
    CreateUser,
    GetUser,
};
