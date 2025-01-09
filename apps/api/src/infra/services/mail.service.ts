import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class MailService {
  private readonly client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:3003',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async sendValidationEmail(data: {
    username: string;
    email: string;
    validationCode: string;
  }) {
    return this.client.post('/send-validate-email', data);
  }

  async sendWelcomeEmail(data: {
    username: string;
    invitedByUsername: string;
    invitedByEmail: string;
    inviteLink: string;
  }) {
    return this.client.post('/send-welcome-email', data);
  }

  async sendSingleWelcomeEmail(data: { username: string; email: string }) {
    return this.client.post('/send-single-welcome', data);
  }
}
