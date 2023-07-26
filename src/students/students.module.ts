import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';

@Module({
  controllers: [StudentsController],
  providers: [StudentsService, PrismaService],
})
export class StudentsModule {}
