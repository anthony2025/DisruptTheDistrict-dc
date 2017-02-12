const fs = require('fs')
const aws = require('aws-sdk');
const uuid = require('node-uuid');
const path = require('path')
const s3 = new aws.S3();

const controller = {
  uploadVideo (req, res) {
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: uuid.v4(),
      Body: fs.readFileSync(path.join(__dirname, 'lecture1.png')),
      Metadata: {
        subject: 'CS',
        class: '101',
        lecture: 'Recursion vs. Loops',
        university: 'University of Maryland',
        professor: 'Roger Thomas',
        date: Date.now().toString()
      }
    }
    s3.putObject(params, (err, data) => {
      if (err) console.log(err, err.stack);
      else console.log(data);
    })
  }
}

module.exports = controller
