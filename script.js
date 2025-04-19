document.addEventListener('DOMContentLoaded', () => {
    const materialType = document.getElementById('material-type');
    const otherMaterialDiv = document.getElementById('other-material');
    const donationForm = document.getElementById('donation-form');
    const thankYouMessage = document.getElementById('thank-you');

    // Show/hide "Other" input field
    if (materialType && otherMaterialDiv) {
        materialType.addEventListener('change', () => {
            if (materialType.value === 'other') {
                otherMaterialDiv.style.display = 'block';
            } else {
                otherMaterialDiv.style.display = 'none';
            }
        });
    }

    // Handle form submission
    if (donationForm && thankYouMessage) {
        donationForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            // Hide form and show thank-you message
            donationForm.style.display = 'none';
            thankYouMessage.style.display = 'block';
        });
    }
});
