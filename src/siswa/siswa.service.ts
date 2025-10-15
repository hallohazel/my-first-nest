import { Injectable } from '@nestjs/common';
import { Siswa } from './siswa.model';

@Injectable()
export class SiswaService {
  private siswaList: Siswa[] = [
    {
      id: 1,
      nama: 'Andi',
      jurusan: 'RPL',
      alamat: 'Jl. Merdeka No. 1',
      gender: 'Laki-laki',
      tlp: '081234567890',
    },
    {
      id: 2,
      nama: 'Budi',
      jurusan: 'TKJ',
      alamat: 'Jl. Sudirman No. 2',
      gender: 'Laki-laki',
      tlp: '082345678901',
    },
    {
      id: 3,
      nama: 'Citra',
      jurusan: 'Multimedia',
      alamat: 'Jl. Thamrin No. 3',
      gender: 'Perempuan',
      tlp: '083456789012',
    },
  ];

  private idCounter = this.siswaList.length + 1;

  getAllSiswa(): Siswa[] {
    return this.siswaList;
  }

  getSiswaById(id: number): Siswa | undefined {
    return this.siswaList.find((siswa) => siswa.id === id);
  }
}
