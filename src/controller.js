const Video = require('./model')
const fs = require('fs')

const controller = {
  uploadVideo (req, res) {
Task.find(req.params.taskId, (err, task) => {
      for (let field in req.body) {
        task.field = req.body.field
      }
      if (err) next(err)
      if (task) return res.status(200).save(task)
      res.status(404).end()
    })
  })
  }
}

module.exports = controller
