const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());

// Sample list of items
let items = [
  { id: 1, name: 'Item 1', price: 10 },
  { id: 2, name: 'Item 2', price: 20 },
  { id: 3, name: 'Item 3', price: 30 }
];

// GET /items
app.get('/items', (req, res) => {
  res.json(items);
});

// POST /items
app.post('/items', (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name,
    price: req.body.price
  };

  items.push(newItem);
  res.status(201).json(newItem);
});

// GET /items/:id
app.get('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find((item) => item.id === itemId);

  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }

  res.json(item);
});

// PUT /items/:id
app.put('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find((item) => item.id === itemId);

  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }

  item.name = req.body.name;
  item.price = req.body.price;

  res.json(item);
});

// DELETE /items/:id
app.delete('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const index = items.findIndex((item) => item.id === itemId);

  if (index === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }

  const deletedItem = items.splice(index, 1)[0];
  res.json(deletedItem);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

module.exports = app;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
