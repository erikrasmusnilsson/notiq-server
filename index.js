const app = require('./src/app')

app.listen(app.get('port'), () => {
    console.log(`server is running on port ${app.get('port')}`)
})