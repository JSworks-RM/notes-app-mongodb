const mongoose = require('mongoose')

// const NODE_APP_MONGODB_HOST = process.env.NODE_APP_MONGODB_HOST
// const NODE_APP_MONGODB_DATABASE = process.env.NODE_APP_MONGODB_DATABASE
// Usando detrusturación sintaxis ECMASCRIPT6
const { NODE_APP_MONGODB_HOST, NODE_APP_MONGODB_DATABASE } = process.env
const MONGODB_URI = `mongodb://${NODE_APP_MONGODB_HOST}/${NODE_APP_MONGODB_DATABASE}`

mongoose.connect(MONGODB_URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true

})
.then(db => console.log('Database is connected'))
.catch(err => console.log(err))