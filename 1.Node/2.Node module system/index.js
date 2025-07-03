const first = require('./first')

try{
    console.log(first.divide(10,0));
}
catch(e){
    console.log('Error Found:', e.message)
}
