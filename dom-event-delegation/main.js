'use strict';
const $taskList = document.querySelector('.task-list');
if (!$taskList) throw new Error('$taskList query failed');
function handleClick(event) {
  const $eventTarget = event.target;
  console.log('$eventTarget:', $eventTarget);
  console.log('$eventTarget.tagName:', $eventTarget.tagName);
  if ($eventTarget.tagName !== 'BUTTON') {
    return;
  }
  const $closestListItem = $eventTarget.closest('.task-list-item');
  console.log('$closestListItem:', $closestListItem);
  $closestListItem?.remove();
}
$taskList.addEventListener('click', handleClick);
