const express = require("express")
const {engine} = require("express-handlebars")
const path = require("path")
const app = express()
const bodyParser = require("body-parser")
app.get("/", (req, res)=>{
  res.send("test funcionando!")
})
//configurações
  // BodyParser
    app.use(bodyParser.urlencoded({ extended: false }))
     app.use(bodyParser.json())
  // Public
    app.use(express.static(path.resolve('public')))
  // handlebars
    app.engine('handlebars', engine());
    app.set('view engine', 'handlebars');
    app.set('views', './views');
    
app.listen(8081, ()=> {
  console.log("Tudo ok")
})
