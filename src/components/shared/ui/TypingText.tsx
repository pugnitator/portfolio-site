import { useEffect, useRef } from "react";

export interface TypingTextProp {
  text: string;
  speedMs: number;
  onTypingEnd: () => void;
}

// export default function TypingText({text, speedMs}: TypingTextProp) {
//   const [title, setTitle] = useState<string[]>([]);
//   useEffect(() => {
//     const titleArr = text.split("");
//     console.log(title);
//     titleArr.forEach((item, index) => {
//         setTimeout(() => {
//           console.log('item', item, 'title', title);
//           setTitle((prev) => [...prev, item]);
//         }, speedMs * index);
//     });
//   }, []);

//   return <span className="live-typing">{title.join('')}</span>;

export default function TypingText({
  text,
  speedMs,
  onTypingEnd,
}: TypingTextProp) {
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    async function typeText(
      text: string,
      ref: React.RefObject<HTMLSpanElement | null>,
      ms: number
    ) {
      console.log('запускаюсь', textRef.current?.textContent)
      if (!ref.current) return;
      ref.current.textContent = "";

      for (const i of text) {
        await new Promise((resolve) => setTimeout(resolve, ms));
        ref.current.textContent += i;
      }
      setTimeout(() => onTypingEnd(), 500);
    }
    typeText(text, textRef, speedMs);
  }, []);

  return <span className="live-typing" ref={textRef}></span>;
}
