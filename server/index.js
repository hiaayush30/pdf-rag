import express from "express"
import cors from "cors"
import multer from "multer";

const upload = multer({ dest: "uploads/" })

const app = express();

app.use(cors())

app.get("/", (req, res) => {
    res.json({ message: "server running" })
})

app.post('/api/upload/pdf', upload.single('pdf'), function (req, res, next) {
    console.log(req.file)
    return res.json({
        message: "uploaded"
    })
})

app.listen(8000, () => {
    console.log("server running on port 8000")
})