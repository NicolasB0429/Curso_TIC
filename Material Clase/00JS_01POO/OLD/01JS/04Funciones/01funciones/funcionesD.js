
// métodos de propiedades
{
    const reproductor = {
        reproducir: function(id) {
            console.log(`Reproduciendo canción id ${id}`);
        },
        pausar: function() {
            console.log('pausando...');
        },
        borrar: function(id) {
            console.log(`Borrando canción con id: ${id}`)
        },
        crearPlaylist: function(nombre) {
            console.log(`Creando la Playlist ${nombre}`);
        },
        reproducirPlaylist: function(nombre) {
            console.log(`Reproduciendo la Playlist ${nombre}`)
        }
    }

    reproductor.reproducir(30);
    reproductor.pausar();

    reproductor.borrar(20);
    reproductor.crearPlaylist('Heavy Metal');
    reproductor.reproducirPlaylist('Heavy Metal');
}

{
    const reproductor = {

        cancion: '',

        reproducir: id => console.log(`Reproduciendo canción id ${id}`),
        pausar: () => console.log('pausando...'),
        borrar: id => console.log(`Borrando canción con id: ${id}`),
        crearPlaylist: nombre =>  console.log(`Creando la Playlist ${nombre}`),
        reproducirPlaylist: nombre =>  console.log(`Reproduciendo la Playlist ${nombre}`),

        set dodo(cancion) {
            this.cancion = cancion;
            console.log(`Añadiendo ${cancion}`)
        },
        get dodo() {
            console.log(`${this.cancion}`)
        }
    }

    reproductor.reproducir(30);
    reproductor.pausar();

    reproductor.borrar(20);
    reproductor.crearPlaylist('Heavy Metal');
    reproductor.reproducirPlaylist('Heavy Metal');


    // Probando set y get se utilizando de la siguiente forma
    reproductor.dodo = 'Enter Sandman';
    reproductor.dodo
}