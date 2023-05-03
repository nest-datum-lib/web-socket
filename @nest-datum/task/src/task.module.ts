import { Module } from '@nestjs/common';
import { TaskService } from './task.service';

@Module({
	controllers: [],
	imports: [],
	providers: [ 
		TaskService,
	],
})
export class TaskModule {
}
