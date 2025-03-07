import TypingText from "../../shared/ui/TypingText";
import { TypingTextProp } from "../../shared/ui/TypingText";

export default function AboutArticle() {
  const props: TypingTextProp = {
    text: "Обо мне",
    speedMs: 100,
  };

  return (
    <article>
      <h1 className="visually-hidden">{props.text}</h1>
      <div className="live-typing title-h1">
        <TypingText {...props} />
      </div>
      <div>
        Тут какой-то очень хороший текст
      </div>
    </article>
  );
}
