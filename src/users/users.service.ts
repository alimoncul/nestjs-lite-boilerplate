import { Injectable } from '@nestjs/common';

export type User = {
    username: string;
    password: string;
    userId: number;
};

@Injectable()
export class UsersService {
    private readonly users = [
        //You can connect to your auth resource
        {
            userId: 1,
            username: 'example_user',
            password: 'example_password'
        }
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find((user) => user.username === username);
    }
}
