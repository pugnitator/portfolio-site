import { useState, useEffect } from "react";

export interface TypingTextProp {
  text: string;
  speedMs: number;
}

export default function TypingText({text, speedMs}: TypingTextProp) {
  const [title, setTitle] = useState<string[]>([]);
  useEffect(() => {
    const titleArr = text.split("");
    console.log(title);
    titleArr.forEach((item, index) => {
        setTimeout(() => {
          console.log('item', item, 'title', title);
          setTitle((prev) => [...prev, item]);
        }, speedMs * index);      
    });
  }, []);

  return <span className="live-typing">{title.join('')}</span>;
}
