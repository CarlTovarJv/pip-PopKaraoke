//Connexion con HTML (Seleccionar el elemento)

const songForm = document.getElementById('song_form');
const playList = document.getElementById('play_list');

// Función para agregar una canción a la lista
function addSong(songName, artistName, songUrl) {
    const listSong = document.createElement('li');
    
    // Agregar clases al <li> para eliminar los estilos predeterminados de lista
    listSong.classList.add("text-lg", "font-semibold", "text-blue-700", "list-none");

    // Insertar contenido en el <li>
    listSong.innerHTML = `
    <div class="flex items-center flex-row justify-between bg-white shadow-md rounded-lg p-5 border border-gray-200 gap-2">
        <div class="flex flex-col w-2/3 space-y-2 mr-20">
            <span class="text-gray-900 font-bold text-xl">${songName}</span>
            <span class="text-gray-600 text-sm">${artistName}</span>
            <a href="${songUrl}" target="_blank" class="text-blue-500 hover:underline mt-1">Reproducir</a>
        </div>
        <button class="delete-btn cursor-pointer bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 ml-auto">
        Eliminar 
        </button>
    </div>

    `;

    // Agregar al HTML
    playList.appendChild(listSong);

    // Agregar al HTML
    playList.appendChild(listSong);

        const deleteBm = listSong.querySelector('.delete-btn');
        deleteBm.addEventListener('click', () => {
            playList.removeChild(listSong); 
        });

        playList.appendChild(listSong);


}


songForm.addEventListener('submit', (event) => {
    event.preventDefault();

    //Obtener datos del formulario
    const songName = document.getElementById("song_name").value
    const artistName = document.getElementById("artist_name").value
    const songUrl = document.getElementById("url_song").value

    addSong(songName, artistName, songUrl);

    songForm.reset()



} )