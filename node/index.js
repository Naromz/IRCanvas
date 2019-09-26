const express = require('express')
const app = express()
yaml = require('js-yaml');
fs = require('fs');


app.get('/getRemoteTypes', function (req, res) {
    fs.readdir('./Remotes/', function (err, items) {
        res.send(items)
    });
    //Send File =>   res.send(JSON.stringify(yaml.load(fs.readFileSync('./Remotes/LGTV.yaml','utf8'))));
})

app.listen(3005)