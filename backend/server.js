const dotenv = require("dotenv").config()
const express = require("express")
const connectDB = require("./config/connectDB")
const Task = require("./models/taskModel")

const cors = require("cors")

const taskRoutes = require("./routes/taskRoute")

const app = express()

//middleware slotted inside our routes and has access to the request and response
app.use(express.json())
//gives access to the formdata x-www-form-urlencoded from the body of the request
app.use(express.urlencoded({extended: false}))

app.use(
    cors({
    origin: ["http://localhost:3000/", "https://mjt-mern-task-app.netlify.app/"],
    })
)



app.use("/api/tasks", taskRoutes)

/* const logger = (req, res, next) =>{
    console.log("Middleware ran")
    console.log(req.method)
    next()
} */
//routes
app.get("/", (req, res) => {
    res.send("Home page")
})


const PORT = process.env.POST || 5000

//we want to start the DB first
const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, ()=>{
            console.log(`Server running on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}
startServer()