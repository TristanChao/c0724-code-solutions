const $taskList = document.querySelector('.task-list');

if (!$taskList) throw new Error('$taskList query failed');

function handleClick(event: Event): void {
  const $eventTarget = event.target as HTMLElement;
  console.log('$eventTarget:', $eventTarget);
  console.log('$eventTarget.tagName:', $eventTarget.tagName);

  if ($eventTarget.tagName === 'BUTTON') {
    const $closestListItem = $eventTarget.closest('.task-list-item');
    console.log('$closestListItem:', $closestListItem);
    $closestListItem?.remove();
  }
}

$taskList.addEventListener('click', handleClick);
