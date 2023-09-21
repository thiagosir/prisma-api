import { Injectable, NestInterceptor, ExecutionContext, CallHandler, NotFoundException } from '@nestjs/common';
import { Observable, catchError } from 'rxjs';
import { DatabaseError } from '../types/DatabaseError';
import { isPrismaError } from '../utils/is-prisma-error.util';

@Injectable()
export class DatabaseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            catchError(error => {
                if (isPrismaError(error)){
                    
                }
                    throw error;
            })
        );
    }
}