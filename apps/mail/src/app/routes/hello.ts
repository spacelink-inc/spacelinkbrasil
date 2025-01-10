import express from 'express'

export const hello = express().get('/', (req, res) => {
    res.send('Mail service is alive')
})
