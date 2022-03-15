// ejercicio 1

let registro = {
    nombre: "Lucas",
    edad: 32,
    altura: 1.78,
    pelicula:[]
}

console.log(registro)

function aumentarAltura (nuevaAltura){
    registro.altura = registro.altura + (nuevaAltura);
    return registro.altura;
}

function agregaPelicula(peliculanueva){
    registro.pelicula.push(peliculanueva);
    return registro.pelicula;
}

// ejercicio 2

let jugador = {
    nombre: "Lionel",
    apellido: "Messi",
    clubes: ['Barcelona', 'PSG']
}