import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import {
	CacheModule, 
	CacheService, 
} from '@nest-datum/cache';
import { RoleAccessHttpTcpController } from './role-access-http-tcp.controller';

@Module({
	controllers: [ RoleAccessHttpTcpController ],
	imports: [
		TransportModule,
		CacheModule,
	],
	providers: [ 
		TransportService, 
		CacheService,
	],
})
export class RoleAccessHttpTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
