import { Injectable } from '@nestjs/common';
import { VERSION } from './constants/app';

@Injectable()
export class AppService {
    getHello(): string {
        return '<a href="api">Click here to go Swagger UI</a>';
    }

    getVersion(): { version: string } {
        return { version: VERSION };
    }

    getServerTime(): string {
        return new Date().toISOString();
    }
}
