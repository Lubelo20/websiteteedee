// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileMenu = document.getElementById("mobileMenu")

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active")

  // Toggle icon
  const icon = mobileMenuBtn.querySelector("i")
  if (mobileMenu.classList.contains("active")) {
    icon.classList.remove("fa-bars")
    icon.classList.add("fa-times")
  } else {
    icon.classList.remove("fa-times")
    icon.classList.add("fa-bars")
  }
})

// Close mobile menu when clicking on a link
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-content a")
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
    const icon = mobileMenuBtn.querySelector("i")
    icon.classList.remove("fa-times")
    icon.classList.add("fa-bars")
  })
})

// Navbar scroll effect
const navbar = document.getElementById("navbar")
let lastScrollTop = 0

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  // Add/remove background based on scroll position
  if (scrollTop > 50) {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.98)"
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
  } else {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
    navbar.style.boxShadow = "none"
  }

  lastScrollTop = scrollTop
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Newsletter form submission
const newsletterForm = document.getElementById("newsletterForm")
newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const email = e.target.querySelector('input[type="email"]').value

  // Simulate form submission
  alert(`Thank you for subscribing with email: ${email}`)
  e.target.reset()
})

// Play button click handler
const playBtn = document.getElementById("playBtn")
playBtn.addEventListener("click", () => {
  // Simulate video play
  alert("Video would play here in a real implementation")
})

// Collection card hover effects
const collectionCards = document.querySelectorAll(".collection-card")
collectionCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)"
  })

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)"
  })
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
const animateElements = document.querySelectorAll(
  ".collection-card, .testimonial-card, .brand-story-text, .brand-story-image",
)
animateElements.forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})

// Cart functionality (basic)
let cartCount = 0
const cartCountElement = document.querySelector(".cart-count")

function updateCartCount() {
  cartCountElement.textContent = cartCount
}

// Search functionality (basic)
const searchBtn = document.querySelector(".nav-icon-btn")
searchBtn.addEventListener("click", () => {
  // Simulate search functionality
  const searchTerm = prompt("Enter search term:")
  if (searchTerm) {
    alert(`Searching for: ${searchTerm}`)
  }
})

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  // Add loading animation
  document.body.style.opacity = "0"
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease"
    document.body.style.opacity = "1"
  }, 100)

  // Initialize cart count
  updateCartCount()
})

// Lazy loading for images
const images = document.querySelectorAll("img")
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target
      img.style.opacity = "1"
      imageObserver.unobserve(img)
    }
  })
})

images.forEach((img) => {
  img.style.opacity = "0"
  img.style.transition = "opacity 0.3s ease"
  img.addEventListener("load", () => {
    img.style.opacity = "1"
  })
  imageObserver.observe(img)
})

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const heroImage = document.querySelector(".hero-image")
  if (heroImage) {
    heroImage.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})

// Add to cart simulation
function addToCart(productId) {
  cartCount++
  updateCartCount()

  // Show notification
  const notification = document.createElement("div")
  notification.textContent = "Item added to cart!"
  notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: #000;
        color: #fff;
        padding: 12px 20px;
        border-radius: 4px;
        z-index: 1001;
        opacity: 0;
        transition: opacity 0.3s ease;
    `

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.style.opacity = "1"
  }, 100)

  setTimeout(() => {
    notification.style.opacity = "0"
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 2000)
}

// Wishlist functionality
const wishlist = new Set()

function toggleWishlist(productId) {
  if (wishlist.has(productId)) {
    wishlist.delete(productId)
    alert("Removed from wishlist")
  } else {
    wishlist.add(productId)
    alert("Added to wishlist")
  }
}

// Size guide modal (basic)
function showSizeGuide() {
  alert("Size guide would open in a modal here")
}

// Product quick view
function quickView(productId) {
  alert(`Quick view for product ${productId} would open here`)
}

// Filter functionality for collections
function filterProducts(category) {
  console.log(`Filtering products by: ${category}`)
  // Implementation would filter product grid
}

// Sort functionality
function sortProducts(sortBy) {
  console.log(`Sorting products by: ${sortBy}`)
  // Implementation would sort product grid
}
