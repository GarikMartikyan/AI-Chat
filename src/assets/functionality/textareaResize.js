import { useEffect } from "react";

export default function (References) {
  useEffect(function () {
    const textarea = References.inputRef.current;

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
