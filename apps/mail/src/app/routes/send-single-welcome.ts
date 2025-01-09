import express from 'express'
import { resend } from '../mail/client'
import SingleWelcome from '../mail/templates/single-welcome'

export const sendSingleWelcome = express
    .Router()
    .post('/send-single-welcome', async (req, res) => {
        const { username, email } = req.body

        await resend.emails.send({
            from: 'Members Club <naoresponda@spacelinkbrasil.com.br>',
            to: email,
            subject: 'Bem-vindo ao Members Club!',
            react: SingleWelcome({
                username,
                email,
            }),
        })

        res.status(200).json({ message: 'Email sent' })
    })
