// Contact form handling
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm")
  const faqItems = document.querySelectorAll(".faq-item")

  // Handle contact form submission
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(contactForm)
    const data = Object.fromEntries(formData)

    // Format message for WhatsApp
    const message = formatWhatsAppMessage(data)

    // Send to WhatsApp
    sendToWhatsApp(message)

    // Show notification
    showNotification("Redirecting to WhatsApp to send your message...", "success")

    // Reset form after a short delay
    setTimeout(() => {
      contactForm.reset()
    }, 1000)
  })

  // FAQ accordion functionality
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")
    const answer = item.querySelector(".faq-answer")
    const icon = question.querySelector("i")

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("active")

      // Close all FAQ items
      faqItems.forEach((faqItem) => {
        faqItem.classList.remove("active")
        faqItem.querySelector(".faq-answer").style.maxHeight = "0"
        faqItem.querySelector("i").classList.remove("fa-minus")
        faqItem.querySelector("i").classList.add("fa-plus")
      })

      // Open clicked item if it wasn't already open
      if (!isOpen) {
        item.classList.add("active")
        answer.style.maxHeight = answer.scrollHeight + "px"
        icon.classList.remove("fa-plus")
        icon.classList.add("fa-minus")
      }
    })
  })
})

// Format message for WhatsApp
function formatWhatsAppMessage(data) {
  let message = "🌟 *New Contact Form Submission* 🌟\n\n"

  if (data.name) {
    message += `👤 *Name:* ${data.name}\n`
  }

  if (data.email) {
    message += `📧 *Email:* ${data.email}\n`
  }

  if (data.phone) {
    message += `📱 *Phone:* ${data.phone}\n`
  }

  if (data.subject) {
    message += `📋 *Subject:* ${data.subject}\n`
  }

  if (data.message) {
    message += `💬 *Message:*\n${data.message}\n`
  }

  message += `\n⏰ *Sent at:* ${new Date().toLocaleString()}`

  return message
}

// Send message to WhatsApp
function sendToWhatsApp(message) {
  // WhatsApp phone number (you may need to add country code)
  const phoneNumber = "0631258926" // Consider changing to +212659042919 if it's a Moroccan number

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message)

  // Create WhatsApp URL
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  // Open WhatsApp in a new window/tab
  window.open(whatsappURL, "_blank")
}

// Show notification function
function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.textContent = message
  notification.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    background: ${type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#3b82f6"};
    color: white;
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    z-index: 1001;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.3s ease;
    max-width: 400px;
    font-weight: 500;
  `

  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.opacity = "1"
    notification.style.transform = "translateX(0)"
  }, 100)

  // Animate out and remove
  setTimeout(() => {
    notification.style.opacity = "0"
    notification.style.transform = "translateX(100%)"
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification)
      }
    }, 300)
  }, 4000)
}
