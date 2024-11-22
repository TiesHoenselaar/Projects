const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let products = [];

app.post('/api/products', (req, res) => {
    const { barcode, expiration } = req.body;
    if (!barcode || !expiration) {
        return res.status(400).json({ message: 'Barcode and expiration date are required' });
    }

    const product = { barcode, expiration };
    products.push(product);

    res.status(201).json({ message: 'Product saved successfully', product });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
