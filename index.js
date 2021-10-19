const express = require('express')
const app = express()

// Set public static folder
app.use(express.static(__dirname + '/public'))


// Use Template Engine
const  expressHbs = require('express-handlebars')
const hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}) 

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

// Define routes here
app.get('/', (req, res) => res.render('index'))

app.get('/:page', (req, res) => {
    const banners = {
        "blog": {
            "title": "Our Blog",
            "sub-title": "Blog"
        },
        "cart": {
            "title": "Shopping Cart",
            "sub-title": "Shopping Cart"
        },
        "category": {
            "title": "Shopping Category",
            "sub-title": "Shop Category"
        },
        "checkout":{
            "title": "Product Checkout",
            "sub-title": "Checkout"
        },
        "confirmation": {
            "title": "Order Confirmation",
            "sub-title": "Shopping Cart"
        },
        "contact": {
            "title": "Contact Us",
            "sub-title": "Contact Us"
        },
        "login": {
            "title": "Login / Register",
            "sub-title": "Login/Register"
        },
        "register": {
            "title": "Register",
            "sub-title": "Register"
        },
        "single-blog": {
            "title": "Blog Details",
            "sub-title": "Blog Details"
        },
        "single-product": {
            "title": "Shop Single",
            "sub-title": "Shop Single"
        },
        "tracking-order":{
            "title": "Order Tracking",
            "sub-title": "Order Tracking"
        },
    }

    const page = req.params.page
    res.render(page, banners[page])
})

// Set Server Port& Start Server
app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), () =>  console.log(`Server is running at http://localhost:${app.get('port')}`))