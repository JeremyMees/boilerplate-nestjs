import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, cache: true }), HttpModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
