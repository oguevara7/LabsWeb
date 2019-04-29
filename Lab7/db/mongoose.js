
const mongoose = require('mongoose')

const connectionURL = 'mongodb+srv://admin:admin123@sandbox-0ttx5.mongodb.net/got?retryWrites=true'

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})
