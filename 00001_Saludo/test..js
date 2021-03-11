it("Si hacemos saludar('Alfonsina', 'Storni') debería retornar Hola Alfonsina Storni, bienvenida a Ada", function() {
let resultado = saludar('Alfonsina', 'Storni')
assert.equal(resultado, 'Hola Alfonsina Storni, bienvenida a Ada',`saludar('Alfonsina', 'Storni') deberia retornar 'Hola Alfonsina Storni, bienvenida a Ada' pero fue ${resultado}`);
})

it("Si hacemos saludar('Valentina', 'Tereshkova') debería retornar Hola Valentina Tereshkova, bienvenida a Ada", function() {
let resultado = saludar('Valentina', 'Tereshkova')
assert.equal(resultado, 'Hola Valentina Tereshkova, bienvenida a Ada',`saludar('Valentina', 'Tereshkova') deberia retornar 'Hola Valentina Tereshkova, bienvenida a Ada' pero fue ${resultado}`);
})