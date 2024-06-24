document.addEventListener('DOMContentLoaded', function() {
    let tabLinks = document.querySelectorAll('.tab-link');
    let tabContents = document.querySelectorAll('.tab-content');
    let rewardButtons = document.querySelectorAll('.reward-button');

    tabLinks.forEach(link => {
        link.addEventListener('click', function() {
            let tabId = this.getAttribute('data-tab');

            tabLinks.forEach(link => link.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    rewardButtons.forEach(button => {
        button.addEventListener('click', function() {
            let url = this.getAttribute('data-url');
            window.location.href = url;
        });
    });
});
