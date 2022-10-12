require("dotenv").config()

const express = require("express")
const nodemailer = require("nodemailer")
const app = express()

const PORT = process.env.PORT || 3000

// Middleware
app.use(express.static("dist"))
app.use(express.json())

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html")
})

app.post("/", async (req, res, next) => {
  try {
    if (!process.env.APP_PASSWORD) {
      throw new Error("You must set APP_PASSWORD")
    }
    // Account details to use nodemailer service
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "renkzk.dev@gmail.com",
        pass: process.env.APP_PASSWORD,
      },
    })

    // Creating Email
    const mailOptions = {
      from: req.body.email,
      to: "renkzk.dev@gmail.com",
      subject: req.body.subject,
      text: req.body.message,
    }

    // Sending Email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error)
        res.send("error")
      } else {
        console.log("Email sent: " + info.response)
        res.send("success")
      }
    })
  } catch (err) {
    next(err)
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
