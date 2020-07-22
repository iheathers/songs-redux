// Action creator
export const selectSong = (song) => {
    return { // Action 
        type: 'SELECTED_SONG',
        payload: song
    }
}