import style from './Header.module.css'

const Header = () => {

    return(
        <div className="header">
            <div className={style.container}>
                <img src="./src/assets/joystickLogoRESIZE.png" width="100px" height="100px" align="center" alt="logo"/>
                <h1 className={style.title}>GameData Hub</h1>
            </div>
        </div>
    )
}

export default Header;
