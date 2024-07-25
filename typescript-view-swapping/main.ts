const $tabContainer = document.querySelector('.tab-container');
const $allTabs = document.querySelectorAll('.tab');
const $allViews = document.querySelectorAll('.view');

if (!$tabContainer) throw new Error('$tabContainer query failed');
if (!$allTabs) throw new Error('$allTabs query failed');
if (!$allViews) throw new Error('$allViews query failed');

$tabContainer.addEventListener('click', (event: Event) => {
  const $eventTarget = event.target as HTMLElement;
  if (!$eventTarget) throw new Error('$focusTab query failed');

  if (!$eventTarget.matches('.tab')) {
    return;
  }

  for (let i = 0; i < $allTabs.length; i++) {
    if ($eventTarget === $allTabs[i]) {
      $allTabs[i].className = 'tab active';
    } else {
      $allTabs[i].className = 'tab';
    }
  }

  const currentView = $eventTarget.dataset.view;
  let showIndex = 0;

  for (let i = 0; i < $allViews.length; i++) {
    $allViews[i].className = 'view hidden';
    if ($allViews[i].getAttribute('data-view') === currentView) {
      showIndex = i;
    }
  }

  $allViews[showIndex].className = 'view';
});
