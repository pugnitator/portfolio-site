import { useState } from "react";
import TypingText from "../../shared/ui/TypingText";
import { TypingTextProp } from "../../shared/ui/TypingText";
import ContentContainer from "../ContentContainer";

export default function AboutArticle() {
  const currentDate = new Date();
  const birthday = new Date("1996-11-22");
  const age = currentDate.getFullYear() - birthday.getFullYear() - ((currentDate < new Date(currentDate.getFullYear(), birthday.getMonth(), birthday.getDate())) ? 1 : 0);

  const aboutInfo = [
    { title: "Имя", text: "Цверава Екатерина" },
    { title: "Дата рождения", text: `22.11.1996 (${age} лет)` },
    { title: "Специальность", text: "frontend-разработчик" },
    { title: "Уровень", text: "junior" },
    { title: "Любимые образовательные материалы" },
  ];

  const studyLinks = [
    { sourceName: "Ulbi TV", link: "https://www.youtube.com/@UlbiTV" },
    { sourceName: "Дока", link: "https://doka.guide/" },
    { sourceName: "Friendly Frontend", link: "https://www.youtube.com/@AleksanderLamkov" },
    { sourceName: "Аналитика ошибок", link: "https://www.youtube.com/@DotaAnalytics" },
  ];

  return (
    <ContentContainer {...{title: 'Обо мне'}}>
      <div className={`about`} >
        {aboutInfo.map(({ title, text }) => (
          <div className="about__info-row">
            <span className="span-title">{title}: </span>
            {text && <span>{text}</span>}
          </div>
        ))}
        <ul className="about__link-list">
          {studyLinks.map(({ sourceName, link }, index) => 
              <li className="about__list-item link" key={index}>
                <a href={link} target="_blank" className="about__link">{`[ ${sourceName} ]`}</a>
              </li>
          )}
        </ul>
      </div>
    </ContentContainer>
  );
};