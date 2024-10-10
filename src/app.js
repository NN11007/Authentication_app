import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import morgan from "morgan"

const app=express()
//middlewares
app.use(cors())//allows to interact with client which is loaded in different domain
app.use(express.json())//instructing the app to accept data in the json format
app.use (cookieParser())//it alows the server to access the user cookies
app.use(morgan("dev"))//logs requests,errors and more to the console
app.get("/",(req,res)=>{
    res.send("<h1>Hello World</h1>")

})
export default app