import { Route, Routes } from "react-router-dom";
import AboutArticle from "./AboutArticle";
import { NavLink } from "react-router-dom";
import GreetingPage from "./GreetingPage";

export interface MainWindowProp {
  isOn: boolean;
}

export default function MainWindow({ isOn }: MainWindowProp) {
  const menuItems = [
    { text: "Главный экран", path: "/" },
    { text: "Обо мне", path: "/about" },
    { text: "Стек технологий", path: "/technologyStack" },
    { text: "Опыт работы", path: "/experience" },
    { text: "Портфолио", path: "/projects" },
  ];

  return (
    <div className="monitor-screen">
      <div className='monitor-screen__menu'>
        <span className='title-h1'>Меню</span>
        <nav className="monitor-screen__nav">
          <ul className="monitor-screen__menu-list">
            {menuItems.map(({ text, path }, index) => (
              <li className="monitor-screen__menu-item link" key={`menu-item${index}`}>
                <NavLink to={path}>{`[ ${text} ]`}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="monitor-screen__content">
        <Routes>
          <Route path="/" element={<GreetingPage />} />
          <Route path="/about" element={<AboutArticle />} />
          <Route path="/" element={<AboutArticle />} />
          <Route path="/" element={<AboutArticle />} />
          <Route path="/" element={<AboutArticle />} />
        </Routes>
      </div>
    </div>
  );
}
