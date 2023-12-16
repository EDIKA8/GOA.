userName = prompt("ჩაწერეთ თქვენი სახელი: ");
lastName = "valishvili";
userAge = "14";
document.write(
  `Hello my name is ${userName}, my last name is ${lastName}, im ${userAge} years old.`
);
userName = prompt("ჩაწერეთ თქვენი გვარი: ");

function myfunction() {
  console.log("this is my function");
  myfunction();
  function myfunction(i) {}
  myfunction("hello world");
}

document.addEventListener('DOMContentLoaded', function () {
  const scrollableSection = document.querySelector('.scrollable-section');
  const readMoreLink = document.querySelector('.read-more-link');

  readMoreLink.addEventListener('click', function (event) {
      event.preventDefault();

      if (scrollableSection.style.maxHeight) {
          scrollableSection.style.maxHeight = null;
      } else {
          scrollableSection.style.maxHeight = scrollableSection.scrollHeight + "px";
      }
  });
});
