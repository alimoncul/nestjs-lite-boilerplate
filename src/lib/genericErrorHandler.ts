import { InternalServerErrorException, HttpException, Logger } from '@nestjs/common';

export function genericErrorHandler(error, errorMessage = ''): InternalServerErrorException | HttpException {
    Logger.error(JSON.stringify(error.stack || error.message || errorMessage));
    const message = error.response ? error.response.data : error.message || error.stack;
    if (error instanceof HttpException) {
        throw error;
    }
    throw new InternalServerErrorException(message);
}
