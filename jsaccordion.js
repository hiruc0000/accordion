(() => {
  const titles = document.querySelectorAll('.title');
  const contents = document.querySelectorAll('.acco-content');

  for (let i = 0; i < titles.length; i++) {
    titles[i].addEventListener('click', () => {
      titles[i].classList.toggle('click');
      contents[i].classList.toggle('open');
    });
  }
})();
