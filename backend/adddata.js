const express = require('express')
const app = express()
const cors = require('cors');
const PORT = 8000
let tasks = [
    { id: 1, name: 'sage', weight : '54' ,picture:'https://img.4gamers.com.tw/ckfinder-th/image2/auto/2020-09/Sage-Valorant-1-1024x576-200902-141712.jpg?versionId=nRTNK1uX1p2ESX9nwbHypJNXHaNOV1z2'},
    { id: 2, name: 'Killjoy', weight : '56' ,picture:'https://th.dafaesports.com/wp-content/uploads/2022/01/Valorant-Killjoy-678x381.jpg'},
    { id: 3, name: 'Neon', weight : '52' ,picture:'https://i.ytimg.com/vi/cVejOleLHJY/maxresdefault.jpg'},
    { id: 4, name: 'Jett', weight : '49' ,picture:'https://i.ytimg.com/vi/FHEHDHSiUfM/maxresdefault.jpg'}
]
app.use(cors())

app.get('/data', (req, res) => {
    res.json(tasks)
})

app.listen(PORT, () => console.log(`listen at ${PORT}`))