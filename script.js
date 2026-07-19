// Interactive Tab Switcher for Competency Displays
function switchTab(event, tabId) {
    // 1. Deactivate all buttons
    const tabButtons = document.getElementsByClassName('tab-btn');
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }
    
    // 2. Hide all tab content boxes
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }
    
    // 3. Activate current selection target
    event.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// Enterprise Consultation Query Handler
function handleFormSubmit(event) {
    event.preventDefault(); // Stop standard page reset
    
    // Extracting user metrics safely
    const name = document.getElementById('clientName').value;
    const email = document.getElementById('clientEmail').value;
    const scope = document.getElementById('projectScope').value;
    
    if(name && email && scope) {
        // Show success layout response window
        document.getElementById('consultationForm').style.display = 'none';
        document.getElementById('formSuccess').style.display = 'block';
        
        // Log trace setup for tracking inputs
        console.log("Consultation Request Initiated:", { name, email, scope });
    }
}
