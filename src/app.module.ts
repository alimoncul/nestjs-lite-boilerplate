import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DATABASE_NAME, DATABASE_URL } from './constants/app';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        MongooseModule.forRoot(DATABASE_URL, {
            dbName: DATABASE_NAME,
            loggerLevel: process.env.NODE_ENV === 'production' ? 'info' : 'debug'
        }),
        AuthModule,
        UsersModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
