document.addEventListener('DOMContentLoaded', function () {
    const currentYear = new Date().getFullYear();
    document.getElementById('annee').textContent = currentYear;

    const queryGETArgs = new URLSearchParams(window.location.search);
    
    if (queryGETArgs.has('sucess')) {
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-success text-center position-fixed z-1000';
        alertDiv.style.top = '10px';
        alertDiv.style.left = '50%';
        alertDiv.style.transform = 'translateX(-50%)';
        alertDiv.style.zIndex = '1000';
        alertDiv.role = 'alert';
        alertDiv.textContent = "Vous avez été déconnecté avec succès.";
        const closeBtn = document.createElement('button');
        closeBtn.type = 'button';
        closeBtn.className = 'btn-close ms-2';
        closeBtn.setAttribute('aria-label', 'Close');
        alertDiv.appendChild(closeBtn);
        closeBtn.addEventListener('click', () => {
            alertDiv.remove();
        });
        document.body.insertBefore(alertDiv, document.body.firstChild);
    }
});