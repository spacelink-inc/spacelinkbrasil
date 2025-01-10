import React from 'react'
import { Html } from '@react-email/html'
import { Head } from '@react-email/head'
import { Preview } from '@react-email/preview'
import { Body } from '@react-email/body'
import { Container } from '@react-email/container'
import { Section } from '@react-email/section'
import { Text } from '@react-email/text'
import { Link } from '@react-email/link'
import { Button } from '@react-email/button'
import { Heading } from '@react-email/heading'
import { Tailwind } from '@react-email/tailwind'

interface ValidationCodeProps {
    username?: string
    email?: string
}

const baseUrl = process.env.BASE_URL ? `https://${process.env.BASE_URL}` : ''

export function ValidationCode({ username, email }: ValidationCodeProps) {
    const previewText = `Confirme seu email`

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className='bg-white my-auto mx-auto font-sans px-2'>
                    <Container className='border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]'>
                        <Heading className='text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0'>
                            Bem vindo ao Members Club!
                        </Heading>
                        <Text className='text-black text-[14px] leading-[24px]'>
                            Olá {username},
                        </Text>
                        <Text className='text-black text-[14px] leading-[24px]'>
                            Estamos muito felizes em te receber no nosso clube!
                            Aproveite todas as vantagens que temos para te
                            oferecer.
                        </Text>
                        <Text className='text-black text-[14px] leading-[24px]'>
                            Para acessar o nosso clube, basta clicar no botão
                            abaixo.
                        </Text>
                        <Button
                            className='bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3'
                            href={`https://spacelinkbrasil.com.br/auth/login`}
                        >
                            Acessar clube
                        </Button>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

export default ValidationCode
