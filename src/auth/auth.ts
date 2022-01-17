import { ApiProperty } from '@nestjs/swagger';

export class LoginBody {
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
}
