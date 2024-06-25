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
        button.addEventListener('click', function(event) {
            event.preventDefault();  // Prevent default action

            let taskId = this.getAttribute('data-task');
            let taskContent = document.getElementById(taskId);

            document.querySelectorAll('.task-content').forEach(content => {
                content.style.display = 'none';
            });

            if (taskContent) {
                taskContent.style.display = 'block';
            }

            let modal = document.getElementById('task-modal');
            modal.style.display = 'block';
        });
    });

    let closeModal = document.querySelector('.close');

    closeModal.addEventListener('click', function() {
        let modal = document.getElementById('task-modal');
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        let modal = document.getElementById('task-modal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
