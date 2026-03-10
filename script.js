// Modal functionality
function showModal(title, message) {
    const modal = document.getElementById('recommendModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');

    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modal.style.display = 'block';

    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

function closeModal() {
    document.getElementById('recommendModal').style.display = 'none';
}

// Enhanced recommend function
function recommend(country) {
    let title = `Explore ${country}`;
    let message = "";

    switch (country) {
        case "India":
            message = "India offers rich culture, heritage sites like the Taj Mahal, and delicious cuisine. Best time: October-March. Entry fees vary by site. Activities include temple visits, wildlife safaris, and yoga retreats.";
            break;
        case "Paris":
            message = "Paris is famous for the Eiffel Tower, Louvre Museum, and romantic Seine cruises. Best time: April-June or September-October. Entry: €16-28 for Eiffel Tower. Activities include art tours, café hopping, and fashion shopping.";
            break;
        case "Maldives":
            message = "Maldives is best for pristine beaches, world-class snorkeling, and luxury resorts. Best time: November-April. Entry free, resorts from $200/night. Activities include diving, spa treatments, and sunset cruises.";
            break;
        case "Japan":
            message = "Japan blends ancient traditions with cutting-edge technology, from Kyoto temples to Tokyo skyscrapers. Best time: March-May or September-November. Entry free, JR Pass for transport. Activities include cherry blossom viewing, hot springs, and sushi making.";
            break;
        case "Dubai":
            message = "Dubai offers luxury shopping at Dubai Mall, Burj Khalifa views, and desert safaris. Best time: November-March. Entry: AED 125 for Burj Khalifa. Activities include desert adventures, yacht tours, and gold souk exploration.";
            break;
        default:
            message = "Amazing travel destination!";
    }

    showModal(title, message);
}

// Card animation on hover
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';
            this.style.transition = 'all 0.3s ease';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
    });

    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.id = 'backToTop';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #e67e22;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 20px;
        cursor: pointer;
        display: none;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    `;
    document.body.appendChild(backToTopBtn);

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Navbar color change animation on card selection
    const exploreButtons = document.querySelectorAll('.card button');
    const nav = document.querySelector('nav');

    exploreButtons.forEach(button => {
        button.addEventListener('click', function() {
            nav.classList.add('selected');
        });
    });
});
