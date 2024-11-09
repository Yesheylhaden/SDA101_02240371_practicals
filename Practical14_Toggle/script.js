const toggleElement = document.querySelector('.toggle');

toggleElement.addEventListener('click', () => {
  toggleElement.classList.add('touched');
  
  const isChecked = toggleElement.getAttribute('aria-checked') === 'true';
  toggleElement.setAttribute('aria-checked', !isChecked);
});