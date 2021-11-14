var texts = document.getElementsByClassName("text1");
console.log(texts);
var textreplace = new Array(
  "Our Customers are the best",
  "Our clients Bank on our integrity and reliability",
  "We dont just sell, we satisfy your needs",
  "Quality over quantity, all day all hour"
);

var len = texts.length;
var i = 0;

function textslider() {
  if (i > len - 1) {
    i = 0;
  }
  texts.text = textreplace[i];
  i++;
  setTimeout("textslider()", 3000);
}
