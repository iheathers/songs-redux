import { combineReducers } from 'redux'

const songListReducer = () => {
   return [
       {title: 'Narisauna' , duration: '4:00'},
       {title: 'Bhanai-Tribal Rain', duration: '5:04' },
       {title: 'Juinu nai hola', duration: '3:55' },
       {title: 'Walk with me', duration: '4:44'}
   ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SELECTED_SONG'){
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songListReducer,
    selectedSong: selectedSongReducer
});