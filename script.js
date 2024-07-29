'use strict';

const inputs = document.querySelectorAll('input');

const updateHandle = function (e) {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
};

inputs.forEach(input => input.addEventListener('change', updateHandle));
inputs.forEach(input => input.addEventListener('mousemove', updateHandle));
