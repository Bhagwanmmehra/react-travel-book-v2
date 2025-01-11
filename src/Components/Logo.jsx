import s from "../Styles/Logo.module.css";
function Logo() {
  return (
    <div className={s.logo}>
      <img src="logo.png" alt="logo" />
    </div>
  );
}

export default Logo;
