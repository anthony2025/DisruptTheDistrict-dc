const Video = require('./model')
const videoRouter = require('express').Router()

videoRouter.route('/')
  // Generic GET
  .get((req, res) => {
    let query = {}
    // filter by status if provided
    if (req.query.status) query.status = req.query.status
    Video.find(query, (err, videos) => {
      if (err) next(err)
      if (videos) return res.status(200).json(videos)
      res.status(404).end()
    })
  })
  // Generic POST
  .post((req, res) => {
    // getting rid of user provided ids in the req body to ensure
    // that mongo handles them exclusively
    if (req.body._id) delete req.body._id
    const video = new Task(req.body)
    video.save((err, videos) => {
      if (err) next(err)
      if (videos) return res.status(201).json(videos)
      res.status(404).end()
    })
  })

videoRouter.route('/:videoId')
  // ById GET
  .get((req, res) => {
    const id = req.params.videoId
    Video.findById(id, (err, video) => {
      if (err) next(err)
      if (video) return res.status(200).json(video)
      res.status(404).end()
    })
  })
  // ById PATCH
  .patch((req, res) => {
    // findByIdandUpdate doesnt play nice with validation
    Video.find(req.params.videoId, (err, video) => {
      for (let field in req.body) {
        video.field = req.body.field
      }
      if (err) next(err)
      if (video) return res.status(200).save(video)
      res.status(404).end()
    })
  })
  // ById DELETE
  .delete((req, res) => {
    const id = req.params.videoId
    Video.findByIdAndRemove(id, (err, video) => {
      if (err) next(err)
      if (video) return res.status(204).end()
      res.status(404).end()
    })
  })

module.exports = videoRouter
