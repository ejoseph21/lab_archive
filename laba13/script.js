let style = 1;

document.getElementById('changeStyleButton').addEventListener('click', function() {
    let stylesheet = document.getElementById('stylesheet');
  if (style === 1) {
    stylesheet.href = 'style2.css';
    style = 2;
  } else {
    stylesheet.href = 'style1.css';
    style = 1;
  }
});

let opacity = 1;

document.getElementById('changeOpacityButton').addEventListener('click', function() {
    let listItems = document.querySelectorAll('li');
  listItems.forEach(item => {
    if (opacity - 0.1 > 0) {
      item.style.opacity = opacity - 0.1;
    } else {
      item.style.opacity = 1;
    }
  });
  opacity = (opacity - 0.1 > 0) ? opacity - 0.1 : 1;
});

document.getElementById('menuIcon').addEventListener('click', function() {
    this.classList.toggle('close');
  });
