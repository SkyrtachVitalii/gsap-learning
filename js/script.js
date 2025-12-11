// 11111111111
// gsap.to(".selector",{
//     x: 100,
//     y: 100,
//     duration: 2,
//     background: "#5bb052ff",
//     delay: .5,
//     repeat: 5,
//     repeatDelay: 1,
//     rotation: 720,
//     stagger: .1,
//     ease: "power2.inOut",
//     // reverse: true,
//     // paused: true,
//     onCopmleted: function(){
//         console.log("Animation completed");
//     }
// });

// 22222222222
// const showMyObj = (selector, obj) => {
//     const el = document.querySelector(selector);
//         el.innerHTML = JSON.stringify({
//         subscribers: obj.subscribers,
//         sponsors: obj.sponsors,
//         delta: obj.delta,
//         color: obj.color,
//     }, null, 2);
// }
// const myObj = {
//   subscribers: 6000,
//   sponsors: 3,
//   delta: .3,
//   color: "#ff0000"
// };

// gsap.to(myObj, {
//   subscribers: 100000,
//   sponsors: 500,
//   delta: .5,
//   color: "#0000ff",
//   duration: 10,
//   delay: 1,
//   onUpdate: () => showMyObj(".selector", myObj)
// });

// 33333333333
// let tl = gsap.timeline({repeat: -1, yoyo: true});
// tl.to(".green", {duration: 2, ease: "back.out(1.7)", xPercent: 1000})
//   .to(".orange", {duration: 2, ease: "back.out(1.7)", xPercent: 1000, rotation: 135}, "-=2") //overlaps by 0.75 seconds
//   .to(".purple", {duration: 2, ease: "back.out(1.7)", xPercent: 1000}, "-=2") //adds a 1-second gap before

// const text2 = document.querySelector(".text2");
// const letters = text2.textContent.split("");

// text2.innerHTML = "";
// text2.style.opacity = 1;

// const spanArray  = letters.map(letter => {
//     const item = document.createElement("span");
//     item.classList.add("letter");
//     item.innerHTML = letter;
//     text2.appendChild(item);

//     const rect = item.getBoundingClientRect();
//     item.style.left = rect.left + "px";
//     item.x = rect.left;
//     item.style.top = rect.top + "px";
//     item.y = rect.top;

//     return item;
// });

// spanArray.forEach(span => {
//     span.style.position = "absolute";
// });

// setTimeout(() => {
//     gsap.to(".letter", {
//         duration: 0.1,
//         opacity: 1,
//         color: "#478132ff",
//         y: 30,
//         stagger: 0.05,
//     });
// }, 1000);


// SplitText.create(".text.animated-text", {
//   type: "words, chars, lines",
//   onSplit(self) {
//     // runs every time it splits
//     gsap.from(self.chars, {
//       duration: 1,
//       y: 100, // animate from 100px below
//       autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
//       stagger: 0.05, // 0.05 seconds between each
//       rotation: 180,
//     });
//   },
// });

// SplitText.create(".text.animated-text", {
//     type: "words, chars, lines",
//     autoSplit: true,
//     onSplit(self) {
//       return gsap.from(self.lines, {
//         yPercent: 20,
//         opacity: 0,
//         stagger: 1,
//         duration: 2,
//         onComplete: () => self.revert()
//       });
//     }
//   });

//   gsap.registerPlugin(SplitText);

const element = document.querySelector(".text3.animated-text");

// КРОК 1: Розбиваємо текст на рядки (це буде внутрішній контент, який рухається)
const childSplit = new SplitText(element, {
  type: "lines",
  linesClass: "line-child" // Клас для внутрішнього тексту
});

// КРОК 2: Розбиваємо текст ЩЕ РАЗ (обгортаємо попередні рядки в маску)
const parentSplit = new SplitText(element, {
  type: "lines",
  linesClass: "line-mask" // Клас для маски (overflow: hidden)
});

// КРОК 3: Анімація
gsap.from(childSplit.lines, {
  duration: 1.5,
  yPercent: 40, // Текст виїжджає знизу (на 100% своєї висоти)
//   ease: "power4.out",
  stagger: 0.5,  // Затримка між рядками
  opacity: 0     // Можна додати для плавності, але для чистої маски часто прибирають
});