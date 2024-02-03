export default function onSubmit(InputRef, ButtonRef) {
  return function (event) {
    InputRef.current.value = "";
    ButtonRef.current.disabled = true;
    console.log("Prevented");
  };
}
