export default function incFix() {
  // increment number fix
  const numbers = document.querySelectorAll(".big-number");
  let count = 0;
  numbers.forEach((number) => {
    number.innerHTML = `0${count + 1}.`;
    count++;
  });
}
