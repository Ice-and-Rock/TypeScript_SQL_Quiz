import Logo from "../images/V3_Logo.png";
import '../styles/tailwind.css'

export default function Header() {
  return (
    <div className="flex items-center justify-center min-h-30vh">
      <img className="h-10vh" src={Logo} alt="logo" />
    </div>
  );
}
