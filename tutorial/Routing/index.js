const express = require('express');
const app = express();

const returnResponse = (req, res) => {
    res.send(`URL : ${req.url}\nMETHOD : ${req.method}`); // 요청에 대해 응답하는 함수 정의
}

app.get("/get", returnResponse); 
app.post("/post", returnResponse);
app.put("/put", returnResponse)
app.patch("/patch", returnResponse);
app.delete("/delete", returnResponse); // 각각의 메소드, URL에 따라 응답처리 함수를 넣어줌

app.listen(8080,() => console.log("Serer is Open"));