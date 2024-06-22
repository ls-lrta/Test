document.addEventListener('DOMContentLoaded', function() {
    const draggableHandle = document.querySelector('.draggable-handle');
    const draggableLine = document.querySelector('.draggable-line');
    let isDragging = false;
    let initialY = 0;
    let offsetY = 0;

    draggableHandle.addEventListener('mousedown', function(e) {
        isDragging = true;
        initialY = draggableLine.offsetTop;
        offsetY = e.clientY - initialY;
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            const tableContainer = document.querySelector('.table-container');
            const tableContainerRect = tableContainer.getBoundingClientRect();
            let newTop = e.clientY - tableContainerRect.top - offsetY;

            // Ensure the new top position stays within the bounds of the table container
            if (newTop < 0) {
                newTop = 0;
            } else if (newTop > tableContainerRect.height - draggableLine.offsetHeight) {
                newTop = tableContainerRect.height - draggableLine.offsetHeight;
            }

            // Update the top position of the draggable line and the handle
            draggableLine.style.top = `${newTop}px`;
            draggableHandle.style.top = `${newTop - 10}px`; // Adjust handle position
        }
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
    });
});
