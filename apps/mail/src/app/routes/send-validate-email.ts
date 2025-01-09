import express from 'express'
import { resend } from '../mail/client'
import ValidationCode from '../mail/templates/validation-code'

export const sendValidateEmail = express
    .Router()
    .post('/send-validate-email', async (req, res) => {
        const { username, email, validationCode } = req.body

        await resend.emails.send({
            from: 'Members Club <naoresponda@spacelinkbrasil.com.br>',
            to: email,
            subject: 'Bem-vindo ao Members Club',
            react: ValidationCode({
                username,
                validationCode,
            }),
        })

        res.status(200).json({ message: 'Email sent' })
    })
