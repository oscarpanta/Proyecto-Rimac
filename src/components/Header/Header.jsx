export const Header = () => {
  return (
    <header className="header">
      <div className="header__icon">
      <img src="/assets/icon/rimac.png" alt="Icon" />
      </div>
      <div className="header__text">
        <p>
        <span className="header__text__medio d-sm-inline d-none">¡Compra por este medio!</span>
        <span className="header__text__numero">
          <i className="fa-solid fa-phone"></i>  (01) 411 6001
        </span>
        </p>
       
      </div>
    </header>
  );
};
