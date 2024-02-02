import { useEffect } from "react";

export default function (textareaRef) {
  useEffect(function () {
    const textarea = textareaRef.current;

    function textareaResize() {
      textarea.style.height = "1.5rem";
      textarea.style.height = textarea.scrollHeight + "px";
    }

    textarea.addEventListener("input", textareaResize);
    const resizeObserver = new ResizeObserver(() => {
      textareaResize();
    });

    resizeObserver.observe(textarea);
    // Get the root element (html)

    return () => {
      resizeObserver.disconnect();
      textarea.removeEventListener("input", textareaResize);
    };
  }, []);
}
