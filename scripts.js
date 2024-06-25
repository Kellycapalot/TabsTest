document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all tab buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to the clicked tab button and corresponding tab content
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Open the third tab by default
    tabButtons[2].classList.add('active');
    tabContents[2].classList.add('active');

    // Modal functionality
    const modals = {
        'follow-x-modal': document.getElementById('follow-x-modal'),
        'subscribeyt-modal': document.getElementById('bgm-modal')
        // Add more modals here if needed
    };

    const closeElements = document.querySelectorAll('.modal .close');
    const buttons = document.querySelectorAll('.reward-button');

    function handleButtonClick(event) {
        console.log('Button clicked:', event.currentTarget.id);
        const buttonId = event.currentTarget.id;
        const modalId = buttonId.replace('-button', '-modal'); // Replace "button" with "modal" to get the modal ID
        const modal = modals[modalId];
        if (modal) {
            console.log('Opening modal:', modalId);
            modal.style.display = 'block';
        } else {
            console.log('No modal found for button:', buttonId);
        }
    }

    buttons.forEach(button => {
        console.log('Attaching click event to:', button.id);
        button.addEventListener('click', handleButtonClick);
    });

    closeElements.forEach(close => {
        console.log('Attaching close event to modal close element');
        close.onclick = function() {
            close.parentElement.parentElement.style.display = 'none';
        };
    });

    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    };
});
