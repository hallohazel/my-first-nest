import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SiswaModule } from './siswa/siswa.module';
// import { UjicobaModule } from './ujicoba/ujicoba.module';

@Module({
  imports: [SiswaModule], // ✅ Modul siswa sudah diimpor ke root module
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
