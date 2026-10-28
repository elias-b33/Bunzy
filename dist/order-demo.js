const dialog = document.querySelector('#order-demo');
const form = document.querySelector('#order-form');
const result = document.querySelector('#order-result');
let opener;

document.querySelectorAll('[data-order-open]').forEach(button => {
  button.addEventListener('click', () => {
    opener = button;
    form.reset();
    result.hidden = true;
    document.body.classList.add('dialog-open');
    dialog.showModal();
  });
});

document.querySelector('[data-order-close]').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  opener?.focus();
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const bun = form.elements.bun.value;
  const quantity = form.elements.quantity.value;
  document.querySelector('#order-summary').textContent = `${quantity} × ${bun}`;
  result.hidden = false;
  result.focus();
});
