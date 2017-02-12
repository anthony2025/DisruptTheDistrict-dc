const aws = require('aws-sdk');
const uuid = require('node-uuid');
const s3 = new aws.S3();

const controller = {
  uploadVideo (req, res) {
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: uuid.v4(),
      Body: req.body.file,
      Metadata: {
        subject: req.body.subject,
        class: req.body.class,
        lecture: req.body.lecture,
        university: req.body.university,
        professor: req.body.professor,
        date: req.body.date
      }
    }
    s3.putObject(params, (err, data) => {
      if (err) console.log(err, err.stack);
      else console.log(data);
    })
  }
}

module.exports = controller
