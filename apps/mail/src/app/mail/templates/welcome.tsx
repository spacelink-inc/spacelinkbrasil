import React from 'react'
import {
    Html,
    Head,
    Preview,
    Body,
    Container,
    Heading,
    Text,
    Tailwind,
    Link,
    Button,
    Section,
} from '@react-email/components'

interface WelcomeEmailProps {
    username?: string
    invitedByUsername?: string
    invitedByEmail?: string
    inviteLink?: string
}

const baseUrl = process.env.BASE_URL ? `https://${process.env.BASE_URL}` : ''

export const WelcomeEmail: React.FC<WelcomeEmailProps> = ({
    username,
    invitedByUsername,
    invitedByEmail,
    inviteLink,
}) => {
    const previewText = `Join ${invitedByUsername} on Vercel`

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className='bg-white my-auto mx-auto font-sans px-2'>
                    <Container className='border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]'>
                        <Heading className='text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0'>
                            Bem-vindo ao <strong>Members Club</strong>
                        </Heading>
                        <Text className='text-black text-[14px] leading-[24px]'>
                            Olá {username},
                        </Text>
                        <Text className='text-black text-[14px] leading-[24px]'>
                            <strong>{invitedByUsername}</strong> (
                            <Link
                                href={`mailto:${invitedByEmail}`}
                                className='text-blue-600 no-underline'
                            >
                                {invitedByEmail}
                            </Link>
                            ) te adicionou a rede dele e agora você faz parte do
                            nosso clube de membros!
                        </Text>
                        <Text>
                            Para finalizar seu cadastro clique neste botão
                            abaixo para realizar as próximas etapas.
                        </Text>
                        <Section className='text-center mt-[32px] mb-[32px]'>
                            <Button
                                className='bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3'
                                href={inviteLink}
                            >
                                Finalizar cadastro
                            </Button>
                        </Section>
                        <Text className='text-black text-[14px] leading-[24px]'>
                            ou caso o botão não funcione, você pode acessar
                            diretamente pela URL:{' '}
                            <Link
                                href={inviteLink}
                                className='text-blue-600 no-underline'
                            >
                                {inviteLink}
                            </Link>
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

export default WelcomeEmail
