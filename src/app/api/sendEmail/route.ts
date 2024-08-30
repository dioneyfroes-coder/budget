//src/app/api/sendEmail.ts

import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { nome, email, mensagem } = await request.json();

    // Configurando o transporte do Nodemailer com Hotmail
    const transporter = nodemailer.createTransport({
      service: 'hotmail',
      auth: {
        user: process.env.HOTMAIL_USER, // Email do Hotmail
        pass: process.env.HOTMAIL_PASS, // Senha ou senha do app gerada no Hotmail
      },
    });

    // Configurando a mensagem de email
    const mailOptions = {
      from: process.env.HOTMAIL_USER, // O email deve ser enviado do email do remetente
      to: 'dioney.froes@hotmail.com', // Destinatário
      subject: 'Pedido de Orçamento',
      text: `Nome: ${nome}\nEmail: ${email}\n\nMensagem:\n${mensagem}`,
    };

    // Enviando o email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json({ success: false, error: 'Erro ao enviar email' });
  }
}
