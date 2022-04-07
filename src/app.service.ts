import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { MailDto } from './dto1/mail-dto';

@Injectable()
export class AppService {
  constructor(private mailerService: MailerService) { }
  public newMessage(messageDto: MailDto): void {
    const { name, email, telefone, mensagem } = messageDto;

    this.mailerService
      .sendMail({
        to: email,
        from: 'Veroneze Advocacia',
        subject: 'Recebemos sua mensagem',
        template: __dirname + '/confirmation',
        context: {
          name: name,
        },
      })
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });

    this.mailerService
      .sendMail({
        to: 'henriqueparedes@hotmail.com',
        from: 'Veroneze Advocacia',
        subject: 'Você recebeu uma nova mensagem',
        template: __dirname + '/newMessage',
        context: {
          name: name,
          mensagem: mensagem,
          email: email,
          telefone: telefone,
        },
      })
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
