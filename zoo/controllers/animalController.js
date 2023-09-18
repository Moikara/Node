let animals = [];

export const getAll = (req, res) => {
    const limit = parseInt(req.query.limit);
    const page = parseInt(req.query.page);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const totalPages = Math.ceil(animals.length / limit)

    const results = animals.slice(startIndex, endIndex);

    res.send(results);
};

export const getAnimal = (req, res) => {
    const animal = animals.find(animal => animal.id === req.params.id);

    if (!animal) {
        return res.status(404).send("No animal foud");
    }

    res.send(animal);
};

export const saveAnimal = (req, res) => {
    const { id, species, name, age, habitat } = req.body;

    const animal = {
        id,
        species,
        name,
        age,
        habitat
    }

    animals.push(animal);

    res.send(animal);
};

export const updateAnimal = (req, res) => {
    const animal = animals.find(animal => animal.id === req.params.id);

    if (!animal) {
        return res.status(404).send("No animal foud");
    }

    const { species, name, age, habitat } = req.body;

    const updatedAnimal = {
        id: animal.id,
        species,
        name,
        age,
        habitat
    }

    animals = animals.map(animal => (animal.id === updatedAnimal.id) ? updatedAnimal : animal);

    res.send(updatedAnimal);
};

export const deleteAnimal = (req, res) => {
    const animal = animals.find(animal => animal.id === req.params.id);

    if (!animal) {
        return res.status(404).send("No animal foud");
    }

    const index = animals.indexOf(animal);
    animals.splice(index, 1);

    res.status(200).send();
};