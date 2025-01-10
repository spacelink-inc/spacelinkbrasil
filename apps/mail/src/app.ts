import express from 'express'
import { sendValidateEmail } from './app/routes/send-validate-email'
import { sendWelcomeEmail } from './app/routes/send-welcome-email'
import { sendSingleWelcome } from './app/routes/send-single-welcome'
import { hello } from './app/routes/hello'

const app = express()
    .use(express.json())
    .use(sendValidateEmail)
    .use(sendWelcomeEmail)
    .use(sendSingleWelcome)
    .use(hello)

app.listen(3003, () => {
    console.log('🚀 Resend service is alive on http://localhost:3003')
})
