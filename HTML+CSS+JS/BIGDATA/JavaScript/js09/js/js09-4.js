document.addEventListener('DOMContentLoaded', () => {
  // const star = document.querySelector('h1').style;
  // star.color = 'white';
  // star.backgroundColor = 'blue';
  // star.borderRadius = '50%';
  // star.textAlign = 'center';
  // star.fontSize = '40px';
  // star.padding = '20px 20px 24px';
  // star.position = 'absolute';
  // star.left = '50%';
  // star.top = '45%';
  // transform = 'translate(50%, 50%)';

  const star = document.querySelector('h1');
  star.style.cssText = `
    color: white;
    background-color: blue;
    border-radius: 50%;
    text-align: center;
    font-size: 40px;
    padding: 20px 20px 24px;
    position: absolute;
    /* left: 50%;
    top: 50%; */
    transform: translate(50vw, 50vh);
  `;
  let x = 0, y = 0;
  const move = () => {
    star.style.left = `${x * 20}px`;
    star.style.top = `${y * 20}px`;
  };
  // console.log(star.style.left, star.style.top);
  addEventListener('keydown', event => {
    const k = event.key, c = k.charAt(5);
    switch (c ? c : k) {
      case 'R': case 'd': x += 1; break;
      case 'U': case 'w': y -= 1; break;
      case 'L': case 'a': x -= 1; break;
      case 'D': case 's': y += 1; break;
    }
    move();

    // console.log(event.keyCode); // deprecated
    console.log(event.key);
    // console.log(event.code);

  })
});