import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class StudentsService {
  constructor(private prismaService: PrismaService) {}

  create(createStudentDto: CreateStudentDto) {
    return this.prismaService.student.create({ data: createStudentDto });
  }

  findAll() {
    return this.prismaService.student.findMany();
  }

  findOne(id: number) {
    return this.prismaService.student.findUnique({ where: { id } });
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return this.prismaService.student.update({
      where: { id },
      data: updateStudentDto,
    });
  }

  remove(id: number) {
    return this.prismaService.student.delete({ where: { id } });
  }
}
