document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");
 // Ensure the Telegram WebApp script is loaded
    if (window.Telegram) {
        console.log("Telegram Web App script loaded");

        window.Telegram.WebApp.onEvent('init', function() {
            console.log("Telegram Web App Initialized");

            const user = window.Telegram.WebApp.initDataUnsafe.user;
            console.log("User Data:", user);

            if (user) {
                const firstName = user.first_name || 'N/A';
                const lastName = user.last_name || 'N/A';
                const userId = user.id || 'unknown';

                document.getElementById('first-name').textContent = firstName;
                document.getElementById('last-name').textContent = lastName;

                // Generate a unique referral link
                const baseUrl = "https://t.me/thetechpandabot";
				const referralLink = `${baseUrl}?start=r_${userId}`;

                // Display the referral link
                const referralUrlElement = document.getElementById('referral-url');
                referralUrlElement.href = referralLink;
                referralUrlElement.textContent = referralLink;
            } else {
                document.getElementById('user-info').textContent = 'No user information available';
                document.getElementById('referral-link').textContent = '';
            }
        });

        // Force trigger the init event for testing
        window.Telegram.WebApp.ready();
    } else {
        console.error("Telegram Web App script not loaded");
    }
});
 // Tab switching functionality
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    // Log the number of tabs and contents found
    console.log(`Number of tab buttons: ${tabButtons.length}`);
    console.log(`Number of tab contents: ${tabContents.length}`);

    // Ensure at least 3 tabs are present
    if (tabButtons.length >= 3 && tabContents.length >= 3) {
        // Open the third tab by default (index 2 since it's zero-based)
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        tabButtons[2].classList.add("active");
        tabContents[2].classList.add("active");
    } else {
        console.warn("There are less than 3 tabs available.");
    }

    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Remove active class from all tab buttons and contents
            tabButtons.forEach((btn) => btn.classList.remove("active"));
            tabContents.forEach((content) => content.classList.remove("active"));

            // Add active class to the clicked tab button and corresponding tab content
            button.classList.add("active");
            const tabId = button.getAttribute("data-tab");
            document.getElementById(tabId).classList.add("active");
        });
    });

    // Modal functionality
    const modals = {
        "follow-x-modal": document.getElementById("follow-x-modal"),
        "subscribeyt-modal": document.getElementById("subscribeyt-modal"),
         "ytdaily1-modal": document.getElementById("ytdaily1-modal"),
         "join-telegram-modal": document.getElementById("join-telegram-modal"),
         "daily-reward-modal": document.getElementById("daily-reward-modal"),
        "invite-friends-modal": document.getElementById("invite-friends-modal"),
        // Add more modals here if needed
    };

    const closeElements = document.querySelectorAll(".modal .close");
    const buttons = document.querySelectorAll(".reward-button");

    function handleButtonClick(event) {
        console.log("Button clicked:", event.currentTarget.id);
        const buttonId = event.currentTarget.id;
        const modalId = buttonId.replace("-button", "-modal"); // Replace "button" with "modal" to get the modal ID
        const modal = modals[modalId];
        if (modal) {
            console.log("Opening modal:", modalId);
            modal.style.display = "block";
        } else {
            console.log("No modal found for button:", buttonId);
        }
    }

    buttons.forEach((button) => {
        console.log("Attaching click event to:", button.id);
        button.addEventListener("click", handleButtonClick);
    });

    closeElements.forEach((close) => {
        console.log("Attaching close event to modal close element");
        close.onclick = function () {
            close.parentElement.parentElement.style.display = "none";
        };
    });

    window.onclick = function (event) {
        if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
        }
    };
    // Get the button element by its ID
    const ytsubbutton = document.getElementById("ytsub-button");
    
    // Add an event listener to the button
    ytsubbutton.addEventListener("click", function() {
        // Navigate to the specified URL
        window.open("https://youtube.com/@thetechpandauniverse", "_blank");
    });
     // Get the button element by its ID
    const ytdailybutton = document.getElementById("ytdaily-button");
    
    // Add an event listener to the button
    ytdailybutton.addEventListener("click", function() {
        // Navigate to the specified URL
        window.open("https://youtube.com/@thetechpandauniverse", "_blank");
    });
     // Get the button element by its ID
    const tgjoinbutton = document.getElementById("tgjoin-button");
    
    // Add an event listener to the button
    tgjoinbutton.addEventListener("click", function() {
        // Navigate to the specified URL
        window.open("https://t.me/+HONPv-1-cmEwODU8", "_blank");
    });
     // Get the button element by its ID
    const xfollowbutton = document.getElementById("xfollow-button");
    
    // Add an event listener to the button
    xfollowbutton.addEventListener("click", function() {
        // Navigate to the specified URL
        window.open("https://x.com/thetechpandabot", "_blank");
    });
    // Get the button element by its ID
    const invitefrbutton = document.getElementById("invitefr-button");
    
    // Add an event listener to the button
    invitefrbutton.addEventListener("click", function() {
        // Navigate to the specified URL
        window.open("https://t.me/share/url?url=t.me/thetechpandabot?start=%reflink%", "_blank");
    });
});
