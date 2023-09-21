import { Injectable, NestInterceptor, ExecutionContext, CallHandler, BadRequestException } from '@nestjs/common';
import { Observable, catchError } from 'rxjs';
import { DatabaseError } from '../types/DatabaseError';
import { isPrismaError } from '../utils/is-prisma-error.util';
import { handleDatabaseErrors } from '../utils/handle-database-errors.util';

@Injectable()
export class DatabaseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            catchError(error => {
                if (isPrismaError(error)){
                    error = handleDatabaseErrors(error)
                }
                if (error instanceof DatabaseError) {
                    throw new BadRequestException()
                } else {
                    throw error;
                }
            })
        );
    }
}