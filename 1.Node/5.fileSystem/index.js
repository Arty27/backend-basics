const file = require('fs')
const path = require('path')

const df = path.join(__dirname,'data')
if(!file.existsSync(df)){
    file.mkdirSync(df)

}