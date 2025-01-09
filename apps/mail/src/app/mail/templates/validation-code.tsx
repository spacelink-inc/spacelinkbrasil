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
    validationCode?: string
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : ''

export function ValidationCode({
    username,
    validationCode,
}: ValidationCodeProps) {
    const previewText = `Confirme seu email`

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className='bg-white my-auto mx-auto font-sans px-2'>
                    <Container className='border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]'>
                        <Heading className='text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0'>
                            Confirme seu email
                        </Heading>
                        <Text className='text-black text-[14px] leading-[24px]'>
                            Olá {username},
                        </Text>
                        <Text className='text-black text-[14px] leading-[24px]'>
                            Para finalizar seu cadastro copie o código de
                            validação abaixo e cole no campo de validação.
                        </Text>
                        <Text className='text-black text-[14px] leading-[24px]'>
                            {validationCode}
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

export default ValidationCode
