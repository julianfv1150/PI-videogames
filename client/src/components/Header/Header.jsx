import style from './Header.module.css'

const Header = () => {

    return(
        <div className="header">
            <div className={style.container}>
                <img src="./src/assets/joystickLogoRESIZE.png" width="100px" height="100px" align="center" alt="logo"/>
                <div className={style.title}>
                    <h1 className={style.title}>GameData</h1>
                    <h1 className={style.title}>Hub</h1>
                </div>
            </div>
        </div>
    )
}

export default Header;
