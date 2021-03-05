import React from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute'
import InfoTooltip from './InfoTooltip';
import { signUp, signIn, getData } from '../utils/auth';


function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = React.useState({});
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isOpenPhotoPopup, setIsOpenPhotoPopup] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isOpenInfoToolTip, setIsOpenInfoToolTip] = React.useState(false);
  const [infoToolTipData, setInfoToolTipData] = React.useState({
    title: '',
    icon: ''
  })
  const [userEmail, setUserEmail] = React.useState('');

  React.useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }
    document.addEventListener('keydown', handleEscClose);
    return () => document.removeEventListener('keydown', handleEscClose)
  })

  React.useEffect(() => {
    api.getUserData()
      .then(result => setCurrentUser(result))
      .catch(err => `ошибка ${err} при получении данных пользователя`);
  }, [])

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsOpenPhotoPopup(false);
    setIsOpenInfoToolTip(false);
  }

  function handleInfoToolTip({ title, icon }) {
    setInfoToolTipData({ title, icon });
    setIsOpenInfoToolTip(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setIsOpenPhotoPopup(true);
    setSelectedCard(card);
  }

  function handleUpdateUser({ name, about }) {
    api.editUserData({ name, about })
      .then(result => {
        setCurrentUser(result);
        closeAllPopups();
      })
      .catch(err => console.log(`Ошибка ${err} при обновлении данных пользователя`));
  }

  function handleUpdateAvatar({ avatar }) {
    api.changeAvatar({ avatar })
      .then(result => {
        setCurrentUser(result);
        closeAllPopups();
      })
      .catch(err => console.log(`Ошибка ${err} при изменении аватара`));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card.id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card.id ? newCard : c);
        setCards(newCards);
      })
      .catch(err => console.log(`Ошибка ${err} при обработке лайка`));
  }

  function handleCardDelete(card) {
    api.deleteCard(card.id)
      .then(() => {
        const newCards = cards.filter(c => c._id !== card.id);
        setCards(newCards);
      })
      .catch(err => console.log(`Ошибка ${err} при удалении карточки`));
  }

  React.useEffect(() => {
    api.getInitialCard()
      .then(result => setCards(result))
      .catch(err => console.log(`Ошибка ${err} при получении карточки`));
  }, [])

  function handleAddPlaceSubmit({ name, link }) {
    api.addNewCard({ name, link })
      .then(newCard => {
        setCards([newCard, ...cards])
        closeAllPopups();
      })
      .catch(err => console.log(`Ошибка ${err} при добавлении карточки`));
  }

  React.useEffect(() => {
    tokenCheck();
  }, [])

  function handleSignUp({ password, email }) {
    return signUp({ password, email })
      .then(res => {
        if (!res || res.statusCode === 400) throw new Error('Что-то пошло не так');
        return res;
      })
      .catch(err => console.log(`Ошибка ${err} при регистрации`))
  }

  function handleSignIn({ password, email }) {
    return signIn({ password, email })
      .then(res => {
        if (res.token) {
          setUserEmail(email);
          setLoggedIn(true);
          localStorage.setItem('jwt', res.token);
        }
      })
      .catch(err => console.log(`Ошибка ${err} при авторизации`))
  }

  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      getData({ jwt })
        .then((res) => {
          if (res) {
            setUserEmail(res.data.email);
            setLoggedIn(true);
            history.push('/');
          }
        })
        .catch(() => history.push('/sign-in'));
    }
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    setUserEmail('');
    setLoggedIn(false);
  }

  return (
    <div className="page">
      <div className="page__container">
        <CurrentUserContext.Provider value={currentUser}>
          <Header
            signOut={handleSignOut}
            userEmail={userEmail}
          />
          <Switch>
            <Route path="/sign-in">
              <Login
                signIn={handleSignIn}
              />
            </Route>
            <Route
              path="/sign-up">
              <Register
                handleInfoToolTip={handleInfoToolTip}
                handleSignUp={handleSignUp}
              />
            </Route>
            <ProtectedRoute
              path="/react-mesto-auth"
              loggedIn={loggedIn}
              component={Main}
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
            <Route path="/">
              {loggedIn ? <Redirect to="/react-mesto-auth" /> : <Redirect to="/sign-in" />}
            </Route>
          </Switch>
          <Footer />
          <InfoTooltip
            isOpen={isOpenInfoToolTip && "popup_opened"}
            onClose={closeAllPopups}
            data={infoToolTipData}
          />
          <ImagePopup
            isOpen={isOpenPhotoPopup && "popup_opened"}
            onClose={closeAllPopups}
            card={selectedCard}
          />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <PopupWithForm
            name="delete-card"
            title="Вы уверены?"
          >
            <div className="popup__item">
              <button className="popup__submit-button" type="submit">Да</button>
            </div>
          </PopupWithForm>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
