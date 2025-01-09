import express from 'express'
import { resend } from '../mail/client'
import WelcomeEmail from '../mail/templates/welcome'

export const sendWelcomeEmail = express
    .Router()
    .post('/send-welcome-email', async (req, res) => {
        const { username, invitedByUsername, invitedByEmail, inviteLink } =
            req.body

        await resend.emails.send({
            from: 'Members Club <naoresponda@spacelinkbrasil.com.br>',
            to: invitedByEmail,
            subject: 'Bem-vindo ao Members Club',
            // @ts-ignore
            react: WelcomeEmail({
                username,
                invitedByUsername,
                invitedByEmail,
                inviteLink,
            }),
        })

        res.status(200).json({ message: 'Email sent' })
    })
