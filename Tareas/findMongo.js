// La sintaxis básica de find()
// const cursor = collection.find(query, projection);

// Para buscar todos los documentos en la colección users que tengan una edad >= a 18 años y que vivan en la ciudad de Bogotá sería así:

// query es un objeto que especifica los criterios de selección
const query = { "age": { "$gte": 18 }, "city": "Bogotá" };
// projection es un objeto que especifica los campos a incluir o excluir en los documentos devueltos
const projection = { "_id": 0, "name": 1, "age": 1, "city": 1 };
const cursor = db.collection('users').find(query, projection);

//  Para obtener los documentos que cumplen con los criterios de selección puedo iterar el cursor que me devuelve con un forEach

cursor.forEach(doc => {
    console.log(doc);
});