document.addEventListener("DOMContentLoaded", function() {
    // Get all modals
    var modals = {
        "follow-x-modal": document.getElementById("follow-x-modal"),
        "subscribeyt-modal": document.getElementById("subscribeyt-modal")
        // Add more modals here if needed
    };

    // Get the close elements for each modal
    var closeElements = document.querySelectorAll(".modal .close");

    // Reward buttons
    var buttons = document.querySelectorAll(".reward-button");

    // Function to handle button click
    function handleButtonClick(event) {
        var buttonId = event.currentTarget.id;
        var modalId = buttonId.replace("button", "modal"); // Replace "button" with "modal" to get the modal ID
        var modal = modals[modalId];
        if (modal) {
            modal.style.display = "block";
        }
    }

    // Attach event listeners to reward buttons
    buttons.forEach(function(button) {
        button.addEventListener("click", handleButtonClick);
    });

    // When the user clicks on <span> (x), close the modal
    closeElements.forEach(function(close) {
        close.onclick = function() {
            close.parentElement.parentElement.style.display = "none";
        };
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = "none";
        }
    };
});
