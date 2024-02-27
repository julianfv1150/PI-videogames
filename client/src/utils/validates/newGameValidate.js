import { nameGameValidate, urlGameValidate, ratingGameValidate, descriptionGameValidate, 
    genreGameValidate, platformGameValidate, releasedGameValidate } from '../index'

const newGameValidate = (gamesData) => {

    return nameGameValidate(gamesData) && urlGameValidate(gamesData) && ratingGameValidate(gamesData) 
    && descriptionGameValidate(gamesData) && genreGameValidate(gamesData) && platformGameValidate(gamesData) 
    && releasedGameValidate(gamesData) 
}

export default newGameValidate;