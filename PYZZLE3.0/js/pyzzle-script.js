const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})

containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault()
    const afterElement = getDragAfterElement(container, e.clientY)
    const draggable = document.querySelector('.dragging')
    if (afterElement == null) {
      container.appendChild(draggable)
    } else {
      container.insertBefore(draggable, afterElement)
    }
  })
})





function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}
const draggableElements = document.querySelectorAll('.draggable');
const randomizeButton = document.getElementById('randomize-button');
const container = document.querySelector('.container');

// Function to randomize the placement of draggable elements within the container
function randomizePlacement() {
    draggableElements.forEach((element) => {
        const containerRect = container.getBoundingClientRect();
        const maxX = containerRect.width - element.offsetWidth;
        const maxY = containerRect.height - element.offsetHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        element.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
}

// Add a click event listener to the randomize button
randomizeButton.addEventListener('click', randomizePlacement);




//color for container background
const checkButton = document.getElementById('check-button');
const resetButton = document.getElementById('reset-button');
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');

let isDragging = null;

// Initialize Interact.js for the draggable list items
interact('.draggable').draggable({
    listeners: {
        start(event) {
            isDragging = event.target;
        },
        move(event) {
            if (isDragging) {
                const { target } = event;
                const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
                const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

                target.style.transform = `translate(${x}px, ${y}px)`;
                target.setAttribute('data-x', x);
                target.setAttribute('data-y', y);
            }
        },
        end() {
            isDragging = null;
        },
    },
});

// Function to check if the placement of draggable elements is correct
function checkPlacement() {
    let isCorrect = true;

    draggableElements.forEach((element) => {
        const elementRect = element.getBoundingClientRect();
        const containerRect1 = container1.getBoundingClientRect();
        const containerRect2 = container2.getBoundingClientRect();

        if (
            (elementRect.left >= containerRect1.left && elementRect.right <= containerRect1.right &&
             elementRect.top >= containerRect1.top && elementRect.bottom <= containerRect1.bottom) ||
            (elementRect.left >= containerRect2.left && elementRect.right <= containerRect2.right &&
             elementRect.top >= containerRect2.top && elementRect.bottom <= containerRect2.bottom)
        ) {
            element.classList.add('correct');
        } else {
            isCorrect = false;
            element.classList.add('incorrect');
        }
    });

    if (isCorrect) {
        container1.style.backgroundColor = '#4CAF50'; // Green
        container2.style.backgroundColor = '#4CAF50'; // Green
    } else {
        container1.style.backgroundColor = '#f44336'; // Red
        container2.style.backgroundColor = '#f44336'; // Red
    }
}

// Function to reset the placement and styles
function resetPlacement() {
    draggableElements.forEach((element) => {
        element.style.transform = 'translate(0px, 0px)';
        element.setAttribute('data-x', 0);
        element.setAttribute('data-y', 0);
        element.classList.remove('correct', 'incorrect');
    });

    container1.style.backgroundColor = '';
    container2.style.backgroundColor = '';
}

// Add a click event listener to the check button
checkButton.addEventListener('click', checkPlacement);

// Add a click event listener to the reset button
resetButton.addEventListener('click', resetPlacement);







new Vue({
  el: '#carousel3d',
  data: {
    slides: 7
  },
  components: {
    'carousel-3d': window['carousel-3d'].Carousel3d,
    'slide': window['carousel-3d'].Slide
  }
})


