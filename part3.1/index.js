const express = require('express')
const app = express()

const persons = [
    {
        id: 1,
        name: 'Arto Hellas',
        number: 3124567845
    },
    {
        id: 2,
        name: 'Pedro Castro',
        number: 3124567845
    },
    {
        id: 3,
        name: 'Ana Rita',
        number: 3124567845
    },
    {
        id: 4,
        name: 'Francis Monroy',
        number: 3124567845
    },
]

app.get('/api/v1/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/v1/person/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    if (!person) {
        res.status(404).end()
        return
    }
})


app.get('/api/v1/info', (req, res) => {
    res.send(`
        <p>Phonebook has info for ${persons.length} people</p>
        <p>${new Date}</p>
    `)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})