import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { LoginBody } from './auth/auth';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
@ApiTags('Application')
export class AppController {
    constructor(private readonly appService: AppService, private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    @ApiOperation({ summary: 'Login via username & password' })
    @ApiResponse({ status: 200 })
    @ApiResponse({ status: 401 })
    async login(@Body() loginBody: LoginBody, @Request() req) {
        return this.authService.login(req.user);
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('version')
    getVersion(): { version: string } {
        return this.appService.getVersion();
    }

    @Get('server-time')
    getServerTime(): string {
        return this.appService.getServerTime();
    }
}
