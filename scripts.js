console.log("Custom script loaded");

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");
    
    // Ensure the Telegram WebApp script is loaded
    if (window.Telegram) {
        console.log("Telegram Web App script loaded");

        // Check WebApp version for additional debug info
        console.log("Telegram WebApp version:", window.Telegram.WebApp.version);

        // Ensure the WebApp is marked as ready
        window.Telegram.WebApp.ready();

       window.onload = function() {
    const telegram = window.Telegram.WebApp;

    if (!telegram.initDataUnsafe || !telegram.initDataUnsafe.user) {
        // Redirect or show an error if the web app is not opened from Telegram
        document.body.innerHTML = '<h1>Please open this web app from Telegram.</h1>';
        return;
    }

    console.log('Telegram Web App Initialized:', telegram);

    const user = telegram.initDataUnsafe.user;
    console.log('User Data:', user);

    if (user) {
        document.getElementById('first_name').innerText = user.first_name;
        document.getElementById('last_name').innerText = user.last_name;
        document.getElementById('user_id').innerText = user.id;

        // Generate the referral link
        const referralLink = `https://t.me/thetechpandabot?start=${user.id}`;
        document.getElementById('tgreferral_link').value = referralLink;
    } else {
        console.error('User data is not available');
    }
};

        // Additional logging for troubleshooting
        console.log("Added ready event handler");
    } else {
        console.error("Telegram Web App script not loaded");
    }
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
        window.open(shareUrl, "_blank");
    });

    // Handle share button click
        document.getElementById('refinvite_button').onclick = function() {
            const message = encodeURIComponent(`Check out TheTechPanda and work your way to become a TechPanda! Here is my referral link: ${referralLink}`);
            const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(referralLink)}&text=${message}`;
            window.open(shareUrl, '_blank');
    } else {
        console.error('User data is not available');
    }

   const referralsContainer = document.getElementById('referrals-container');
    
    // Function to fetch referral data
    async function fetchReferrals() {
        try {
            const response = await fetch('/api/referrals'); // Update this URL to your actual API endpoint
            const data = await response.json();
            return data.referrals;
        } catch (error) {
            console.error('Error fetching referral data:', error);
            return [];
        }
    }

    // Function to display referrals
    function displayReferrals(referrals) {
        referralsContainer.innerHTML = '';

        if (referrals.length === 0) {
            referralsContainer.innerHTML = '<p>You have 0 referrals</p>';
        } else {
            referrals.forEach(referral => {
                const referralElement = document.createElement('div');
                referralElement.classList.add('referral');

                referralElement.innerHTML = `
                    <div class="referral-header">
                        <div class="referral-info">
                            <p>${referral.name}</p>
                            <p>${referral.tier} | ${referral.points.toLocaleString()}</p>
                        </div>
                        <p class="referral-reward">+${referral.reward.toLocaleString()}</p>
                    </div>
                    <div class="referral-progress">
                        <div class="progress-bar" style="width: ${referral.progress}%;"></div>
                    </div>
                `;

                referralsContainer.appendChild(referralElement);
            });
        }
    }

    // Fetch and display referrals on page load
    fetchReferrals().then(displayReferrals);

});
