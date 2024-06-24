document.addEventListener("DOMContentLoaded", function() {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabLinks.forEach(link => {
        link.addEventListener("click", function() {
            const tabId = this.getAttribute("data-tab");

            // Remove active class from all tab links and tab contents
            tabLinks.forEach(link => link.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            // Add active class to the clicked tab link and the corresponding tab content
            this.classList.add("active");
            document.getElementById(tabId).classList.add("active");
        });
    });
});
