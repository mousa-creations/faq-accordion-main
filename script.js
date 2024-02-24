document.addEventListener('DOMContentLoaded', function () {
  const toggles = document.querySelectorAll('.toggle');
  toggles.forEach(toggle => {
    toggle.addEventListener('click', function () {
      const answer = this.parentElement.nextElementSibling;
      const question = this.parentElement;
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      question.classList.toggle('active');
      toggle.classList.toggle('collapsed');
      toggle.classList.toggle('expanded');
      answer.classList.toggle('show-answer');
    });
  });
});
