import TypingText, { TypingTextProp } from "../shared/ui/TypingText";
import { useState } from "react";

interface ContentContainerProp {
    title: string;
    children: React.ReactNode;
}

export default function ContentContainer({title, children}: ContentContainerProp) {
  const [isTitleFinished, setIsTitleFinished] = useState(false);
  const props: TypingTextProp = {
    text: title,
    speedMs: 100,
    onTypingEnd: () => setIsTitleFinished(true),
  };

  return (
    <article className='info'>
      <h1 className="visually-hidden">{title}</h1>
      <div className="info__title title-h1">
        <TypingText {...props} />
      </div>
      <div className={`info__container ${isTitleFinished ? '' : 'transparent'}` }>
        { children }
      </div>
      <button className="link" type="button">{`[ Назад ]`}</button>
    </article>
  );
}