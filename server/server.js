import express from 'express';
import bodyParser  from 'body-parser';


var temperature = 0;
var humidity = 0


const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => { res.send(`temp: ${temperature} humi ${humidity}`); });

app.get('/data', async (req, res) => {
  const number = req.query.number;

  if (!number) {
    return res.status(400).json({ error: 'number parameter is missing' });
  }

  try {
    const numberData = number;
    if (!numberData) {
      return res.status(500).json({ error: 'number data not available' });
    }
    res.status(200).json(numberData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch number data' });
  }
});

app.post('/update', (req, res) => {
  temperature = req.body.temperature
  humidity = req.body.humidity
  console.log(`temp: ${temperature} humi ${humidity}`);
  res.status(200).json({ message: `updated` });
});

app.listen(PORT, () => console.log(`Connected to ${PORT}`));