console.log("Script Started");

// Function to handle filter button clicks
function setupFilterButtons() {
    // Get all filter buttons
    let filterButtons = document.querySelectorAll('.filter-btn');
    
    // Add click event to each filter button
    filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {
        console.log('Filter clicked:', button.innerText);
            console.log('Filter clicked:', )
        }
        // Remove active class from all buttons
        filterButtons.forEach(function(btn) {
        btn.classList.remove('active');
        });

    // Add active class to clicked button
        button.classList.add('active');

        });
    });
}

// Call the function when page loads
setupFilterButtons();
