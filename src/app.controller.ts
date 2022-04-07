import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MailDto } from './dto/mail-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('/email')
  createTask(@Body() messageDto: MailDto) {
    return this.appService.newMessage(messageDto);
  }
}
