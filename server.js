const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/api/status', (req, res) => {
    // Lógica para as faixas solicitadas:
    const cpu = Math.floor(Math.random() * 101); // 0 a 100%
    const ram = Math.floor(Math.random() * 17);  // 0 a 16GB
    const temp = Math.floor(Math.random() * (90 - 30 + 1)) + 30; // 30° a 90°

    res.json({
        cpu: cpu,
        ram: ram,
        temp: temp
    });
});

app.listen(3000, () => {
    console.log("Servidor SkyNode ON: http://localhost:3000");
});