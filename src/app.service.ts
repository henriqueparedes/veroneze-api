import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { MailDto } from './dto/mail-dto';

@Injectable()
export class AppService {
  constructor(private mailerService: MailerService) { }
  // async newMessage(messageDto: MailDto) {
  // const { name, email, telefone, mensagem } = messageDto;
  // this.mailerService.sendMail({
  //   to: email, // list of receivers
  //   from: 'Veroneze API', // sender address
  //   subject: 'Formulário Recebido', // Subject line
  //   template: '/email-confirmation',
  //   html: `<div>
  //   <p>Você recebeu uma nova mensagem de: ${name}</p>
  //   <p>Mensagem: ${mensagem}</p>
  //   <p>O E-mail para contato é: ${email}</p>
  //   <p>O telefone para contato é: ${telefone}</p>
  //   </div>`, // HTML body content
  // });
  // }

  public newMessage(messageDto: MailDto): void {
    this.mailerService
      .sendMail({
        to: 'henriqueparedes@hotmail.com',
        from: 'noreply@nestjs.com',
        subject: 'Testing Nest Mailermodule with template ✔',
        template: __dirname + '/confirmation',
        context: {
          // Data to be sent to template engine.
          name: 'cf1a3f828287',
          url: 'john doe',
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
