import { Controller, Get, Param } from '@nestjs/common';
import { SiswaService } from './siswa.service';
import { Siswa } from './siswa.model';

@Controller('siswa')
export class SiswaController {
  constructor(private readonly siswaService: SiswaService) {}

  @Get()
  getAllSiswa(): Siswa[] {
    return this.siswaService.getAllSiswa();
  }

  @Get(':id')
  getSiswaById(@Param('id') id: string): Siswa | { message: string } {
    const siswa = this.siswaService.getSiswaById(Number(id));
    if (!siswa) {
      return { message: 'Siswa tidak ditemukan' };
    }
    return siswa;
  }
}
