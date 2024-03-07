import { Module } from '@nestjs/common';
import { FetchAdapter } from './adapter/fetch.adapter';

@Module({
    providers: [FetchAdapter],
    exports: [FetchAdapter]
})
export class CommonModule {}
