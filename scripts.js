document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    // Get all modals
    var modals = {
        'follow-x-modal': document.getElementById('follow-x-modal'),
        'bgm-modal': document.getElementById('bgm-modal')
        // Add more modals here if needed
    };

    // Get the close elements for each modal
    var closeElements = document.querySelectorAll('.modal .close');

    // Reward buttons
    var buttons = document.querySelectorAll('.reward-button');

    // Function to handle button click
    function handleButtonClick(event) {
        console.log('Button clicked:', event.currentTarget.id);
        var buttonId = event.currentTarget.id;
        var modalId = buttonId.replace('-button', '-modal'); // Replace "button" with "modal" to get the modal ID
        var modal = modals[modalId];
        if (modal) {
            console.log('Opening modal:', modalId);
            modal.style.display = 'block';
        } else {
            console.log('No modal found for button:', buttonId);
        }
    }

    // Attach event listeners to reward buttons
    buttons.forEach(function(button) {
        console.log('Attaching click event to:', button.id);
        button.addEventListener('click', handleButtonClick);
    });

    // When the user clicks on <span> (x), close the modal
    closeElements.forEach(function(close) {
        console.log('Attaching close event to modal close element');
        close.onclick = function() {
            close.parentElement.parentElement.style.display = 'none';
        };
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    };
});
