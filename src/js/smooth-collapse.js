var showTeamMemberInfo = () => {
  // prevent the code run on small devices
  if (window.innerWidth > 768) {
    // get all the triggers
    let triggers = document.querySelectorAll('[data-trigger="collapse"]')
    // creates the event listener of each trigger
    for (let i = 0; i < triggers.length; i++) {
      triggers[i].addEventListener('mouseover', () => {
        checkState(triggers[i])
      })
    }
    // creates the event listener of each trigger to reverter the mouseover change
    for (let i = 0; i < triggers.length; i++) {
      triggers[i].addEventListener('mouseout', () => {
        checkState(triggers[i])
      })
    }
  }
}

function checkState(trigger) {
  // selecting parent element to find collapsible children
  let parent = trigger.parentElement
  // selecting collapsible elements within the parent element
  let elements_collapsible = parent.querySelectorAll('[data-state]')
  elements_collapsible.forEach(element => {
    let state = element.getAttribute('data-state')
    if (state === 'collapsed') {
      expandElement(element)
    } else {
      collapseElement(element)
    }
  })
}

// collapse the element
function collapseElement(element) {
  element.animate(
    [
      { height: `${element.scrollHeight}px` },
      { height: 0 }
    ], {
      duration: 400,
      easing: 'ease'
    }
  )
  // mark the element as "currently collapsed"
  element.setAttribute('data-state', 'collapsed')
}

// expand the element
function expandElement(element) {
  element.animate(
    [
      { height: 0 },
      { height: `${element.scrollHeight}px` }
    ], {
      duration: 400,
      easing: 'ease'
    }
  )
  // mark the element as "currently expanded"
  element.setAttribute('data-state', 'expanded')
}