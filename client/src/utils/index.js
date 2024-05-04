import login from './login.js'
import userCreate from './userCreate.js'
import searchGames from './searchGame.js'
import chargeGames from './chargeGames.js'
import createGame from './createGame.js'
import { showModal, closeModal, succesModal } from './actionsModal.js'
import passwordValidate from './validates/passwordValidate.js'
import userValidate from './validates/userValidate.js'
import emailValidate from './validates/emailValidate.js'
import nameGameValidate from './validates/nameGameValidate.js'
import urlGameValidate from './validates/urlGameValidate.js'
import ratingGameValidate from './validates/ratingGameValidate.js'
import descriptionGameValidate from './validates/descriptionGameValidate.js'
import genreGameValidate from './validates/genreGameValidate.js'
import platformGameValidate from './validates/platformGameValidate.js'
import releasedGameValidate from './validates/releasedGameValidate.js'
import newGameValidate from './validates/newGameValidate.js'
import loginValidate from './validates/loginValidate.js'
import registerValidate from './validates/registerValidate.js'

export const URL = import.meta.env.VITE_URL;
export const noImage = '../src/assets/noImage.svg';        

export {
  login, 
  emailValidate, 
  passwordValidate,
  userValidate,
  userCreate,
  searchGames,
  chargeGames,
  createGame,
  nameGameValidate,
  urlGameValidate,
  ratingGameValidate,
  descriptionGameValidate,
  genreGameValidate,
  platformGameValidate,
  releasedGameValidate,
  newGameValidate,
  loginValidate,
  registerValidate,
  showModal,
  closeModal,
  succesModal
}