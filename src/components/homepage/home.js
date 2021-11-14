var texts = document.querySelectorAll(".text1")[0];
// console.log(texts.innerText);
var textreplace = new Array(
  "Our Customers are the best",
  "Our clients Bank on our integrity and reliability",
  "We dont just sell, we satisfy your needs",
  "Quality over quantity, all day all hour"
);

var len = textreplace.length;
var i = 0;

function textslider() {
  if (i > len - 1) {
    i = 0;
  }
  texts.innerText = textreplace[i];
  i++;
  setTimeout("textslider()", 3000);
}
