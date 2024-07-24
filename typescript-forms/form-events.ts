function handleFocus(event: Event): void {
  console.log('focus event fired');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('eventTarget.name:', eventTarget.name);
}

function handleBlur(event: Event): void {
  console.log('blur event fired');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('eventTarget.name:', eventTarget.name);
}

function handleInput(event: Event): void {
  console.log('input event fired');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('eventTarget.name:', eventTarget.name);
  console.log('eventTarget.value:', eventTarget.value);
}

const $nameInput = document.querySelector('#user-name');
const $emailInput = document.querySelector('#user-email');
const $messageTextArea = document.querySelector('#user-message');

if (!$nameInput) throw new Error('$nameInput query failed');
if (!$emailInput) throw new Error('$emailInput query failed');
if (!$messageTextArea) throw new Error('$messageTextArea query failed');

$nameInput.addEventListener('focus', handleFocus);
$nameInput.addEventListener('blur', handleBlur);
$nameInput.addEventListener('input', handleInput);

$emailInput.addEventListener('focus', handleFocus);
$emailInput.addEventListener('blur', handleBlur);
$emailInput.addEventListener('input', handleInput);

$messageTextArea.addEventListener('focus', handleFocus);
$messageTextArea.addEventListener('blur', handleBlur);
$messageTextArea.addEventListener('input', handleInput);
