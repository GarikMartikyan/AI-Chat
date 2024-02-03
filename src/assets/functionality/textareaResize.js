import { useEffect } from "react";

export default function (TextareaRef) {
  useEffect(function () {
    const textarea = TextareaRef.current;

    function textareaResize() {
      textarea.style.height = "1.5rem";
      textarea.style.height = textarea.scrollHeight + "px";
    }

    textarea.addEventListener("input", textareaResize);
    const resizeObserver = new ResizeObserver(() => {
      textareaResize();
    });

    resizeObserver.observe(textarea);

    return () => {
      resizeObserver.disconnect();
      textarea.removeEventListener("input", textareaResize);
    };
  }, []);
}
