import express from "express"
const app=express()


enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

//200,404,411,500
app.get("/", (req, res) => {
    if (!req.query.userId) {
			res.status(ResponseStatus.NotFound).json({})
    }
    // and so on...
		res.status(ResponseStatus.Success).json({});
})