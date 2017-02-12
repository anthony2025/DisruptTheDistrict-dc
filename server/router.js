const path = require('path')
const express = require('express')
const controller = require('./controller.js')

const router = express.Router()
router.use(express.static('public'))
router.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/upload.html')))
router.get('/library', (req, res) => res.sendFile(path.join(__dirname, '../public/library.html')))
router.get('/about', (req, res) => res.sendFile(path.join(__dirname, '../public/about.html')))
router.get('/upload', (req, res) => res.sendFile(path.join(__dirname, '../public/upload.html')))
router.post('/upload', (req, res) => {controller.uploadVideo(req,res)})

module.exports = router
