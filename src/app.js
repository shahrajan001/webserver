// const express = require('express')
// const app = express()

// app.get('', (req, res) => {
//     res.send('Hello rajan')
// })

// app.get('/Greetings', (req, res) => {
//     res.send('Greetings of the day')
// })


// app.get('/About', (req, res) => {
//     res.send('We are a surat based startup')
// })


// app.get('/Weather', (req, res) => {
//     res.send('Surat has very humid climate')
// })

// app.listen(3000, () => {
//     console.log('Server is up on port 3000.')
// })



// const express = require('express')
// const app = express()

// app.get('', (req, res) => {
//     res.send('<h1>Hello rajan </h1>')
// })

// app.get('/info', (req, res) => {
//     res.send({firstName: 'rajan', surName:'shah'})
// })

// app.get('/about', (req, res) => {
//     res.send('<title>We are a surat based startup </title> <h2> hello brother</h2>')
   
// })


// app.get('/weather', (req, res) => {
//     res.send({forecast: 'it is likely to rain', location: 'Surat'})
// })

// app.listen(3000, () => {
//     console.log('Server is up on port 3000.')
// })


// const express = require('express')
// const path = require('path')

// const app = express()
// const publicLocation = path.join(__dirname,'../public')

// app.use(express.static(publicLocation))

// app.get('/weather', (req, res) => {
//     res.send({
//         forecast: 'it is likely to rain', 
//         location: 'Surat'
//     })
// })

// app.listen(3000, () => {
//     console.log('Server is up on port 3000.')
// })


// const express = require('express')
// const path = require('path')

// const app = express()
// const publicLocation = path.join(__dirname,'../public')

// app.set('views', '../views')                //mandatory

// app.set('view engine', 'hbs')                // compulsory to be same to use the same
// //app.use(express.static(publicLocation))

// app.get('', (req, res) => {
//     res.render('index',{
//         name: "rajan shah",
//         rollno: "ui18ec01"
//     })
// })

// app.get('/about', (req, res) => {
//     res.render('about',{
//         year: 4,
//         department : "ECE"
//     })
// })


// app.get('/help', (req, res) => {
//     res.render('help',{
//         phone : 7621982258,
//         email : "shahrajan7621@gmail.com"
//     })
// })

// app.get('/weather', (req, res) => {
//     res.send({
//         forecast: 'it is likely to rain', 
//         location: 'Surat'
//     })
// })

// app.listen(3000, () => {
//     console.log('Server is up on port 3000.')
// })



// const express = require('express')
// const path = require('path')

// const app = express()


// // defining paths of locations 
// const publicLocation = path.join(__dirname,'../public')
// const viewPath = path.join(__dirname,'../templates')

// // path change of views to templates
// app.set('views', viewPath)                //mandatory   // changed as compared to above code also the views folder is replaced by templates folder


// // setting up engine
// app.set('view engine', 'hbs')                // compulsory to be same to use the same
// //app.use(express.static(publicLocation))

// app.get('', (req, res) => {
//     res.render('index',{
//         name: "rajan shah",
//         rollno: "ui18ec01"
//     })
// })

// app.get('/about', (req, res) => {
//     res.render('about',{
//         year: 4,
//         department : "ECE"
//     })
// })


// app.get('/help', (req, res) => {
//     res.render('help',{
//         phone : 7621982258,
//         email : "shahrajan7621@gmail.com"
//     })
// })

// app.get('/weather', (req, res) => {
//     res.send({
//         forecast: 'it is likely to rain', 
//         location: 'Surat'
//     })
// })

// app.listen(3000, () => {
//     console.log('Server is up on port 3000.')
// })


// --------------------------------02 FEB 2022------------------------------------

// const express = require('express')
// const path = require('path')
// const hbs = require('hbs')       // added
// const app = express()


// // defining paths of locations 
// const publicLocation = path.join(__dirname,'../public')
// const viewsPath = path.join(__dirname,'../templates/views')
// const partialsPath = path.join(__dirname,'../templates/partials')   //added

// // path change of views to templates


// // setting up engine
// app.set('view engine', 'hbs')                // compulsory to be same to use the same
// //app.use(express.static(publicLocation))
// app.set('views', viewsPath)                
// hbs.registerPartials(partialsPath)          //added
// app.get('/', (req, res) => {
//     res.render('index',{
//         name: "rajan shah",
//         rollno: "ui18ec01"
//     })
// })

// app.get('/about', (req, res) => {
//     res.render('about',{
//         year: 4,
//         name : "ECE"
//     })
// })


// app.get('/help', (req, res) => {
//     res.render('help',{
//         phone : 7621982258,
//         name : "shahrajan7621@gmail.com"
//     })
// })

// app.get('/weather', (req, res) => {
//     res.send({
//         name: 'weather',
//         forecast: 'it is likely to rain', 
//         location: 'Surat'
//     })
// })

// app.listen(3000, () => {
//     console.log('Server is up on port 3000.')
// })

// const express = require('express')
// const path = require('path')
// const hbs = require('hbs')       // added
// const app = express()


// // defining paths of locations 
// const publicLocation = path.join(__dirname,'../public')
// const viewsPath = path.join(__dirname,'../templates/views')
// const partialsPath = path.join(__dirname,'../templates/partials')   //added

// // path change of views to templates


// // setting up engine
// app.set('view engine', 'hbs')                // compulsory to be same to use the same
// app.use(express.static(publicLocation))
// app.set('views', viewsPath)                
// hbs.registerPartials(partialsPath)          //added
// app.get('/', (req, res) => {
//     res.render('index',{
//         name: "rajan shah",
//         rollno: "ui18ec01",
//         creator : 'Rajan@appgambit'
//     })
// })

// app.get('/about', (req, res) => {
//     res.render('about',{
//         year: 4,
//         name : "ECE",
//         creator : 'Rajan@appgambit'
//     })
// })


// app.get('/help', (req, res) => {
//     res.render('help',{
//         phone : 7621982258,
//         name : "shahrajan7621@gmail.com",
//         creator : 'Rajan@appgambit'
//     })
// })

// app.get('/weather', (req, res) => {
//     res.send({
//         name: 'weather',
//         forecast: 'it is likely to rain', 
//         location: 'Surat',
//         creator : 'Rajan@appgambit'
//     })
// })

// app.get('/help/*', (req, res) => {                                 //added   //if nothing found then...                                                                                
//     res.render('help404',{
//         name:'Error',
//         message:'Help article not found',
//         creator : 'Rajan@appgambit'})
// })

// app.get('*', (req, res) => {                                 //added   //if nothing found then...                                                                                
//     res.render('help404',{
//         name:'Error',
//         message:'No page found',
//         creator : 'Rajan@appgambit'
//     })
// })

// app.listen(3000, () => {
//     console.log('Server is up on port 3000.')
// })
//---------------------------------------------------SECTION 8----------------------------------

const express = require('express')
const path = require('path')
const hbs = require('hbs')       // added
const app = express()


// defining paths of locations 
const publicLocation = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')   //added

// path change of views to templates


// setting up engine
app.set('view engine', 'hbs')                // compulsory to be same to use the same
app.use(express.static(publicLocation))
app.set('views', viewsPath)                
hbs.registerPartials(partialsPath)          //added
app.get('/', (req, res) => {
    res.render('index',{
        name: "rajan shah",
        rollno: "ui18ec01",
        creator : 'Rajan@appgambit'
    })
})

app.get('/about', (req, res) => {
    res.render('about',{
        year: 4,
        name : "ECE",
        creator : 'Rajan@appgambit'
    })
})

app.get('/help', (req, res) => {
    res.render('help',{
        phone : 7621982258,
        name : "shahrajan7621@gmail.com",
        creator : 'Rajan@appgambit'
    })
})

const forecast = require('./../utils/forecastC')
const geocode = require('./../utils/geocodeC')

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error : 'Error! You did not mentioned address'
        })
    }
        geocode(req.query.address, (error,{longitude,latitude,geometry}={}) => {
            if(error){
                return  res.send('Error : ' + error)
            }
            forecast(longitude, latitude, (error, {Time,temperature,weather}) => {
                if(error){
                    return  console.log('Error' + error)
                }
                    res.send({
                        address: req.query.address,
                        Time,
                        temperature,
                        weather: weather[0]
                    })
                    
      })
        })
    })

app.get('/help/*', (req, res) => {                                 //added   //if nothing found then...                                                                                
    res.render('help404',{
        name:'Error',
        message:'Help article not found',
        creator : 'Rajan@appgambit'})
})


app.get('/products', (req,res) => {
    if (!req.query.search){

        return res.send({
            error : "Search not provided"
        })
    }
    
    res.send({
        products :[] })

})

app.get('*', (req, res) => {                                 //added   //if nothing found then...                                                                                
    res.render('help404',{
        name:'Error',
        message:'No page found',
        creator : 'Rajan@appgambit'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})


