// ==============================
// Ashok Jewellery and Bankers - script.js
// ==============================

// LOAN CALCULATOR
function calculateLoan() {
    const weight = parseFloat(document.getElementById("goldWeight").value);
    const purity = parseFloat(document.getElementById("purity").value);
    const tenure = parseInt(document.getElementById("tenure").value);
  
    if (isNaN(weight) || isNaN(purity) || isNaN(tenure)) {
      alert("Please fill out all calculator fields.");
      return;
    }
  
    // Assume gold price per gram (22kt) = ₹5800
    const pricePerGram = 5800 * (purity / 22);
    const loanAmount = weight * pricePerGram * 0.75; // 75% of market value
    const interestRate = 0.01; // 1% per month
    const totalInterest = loanAmount * interestRate * tenure;
    const totalRepayment = loanAmount + totalInterest;
  
    const resultDiv = document.getElementById("loanResult");
    resultDiv.innerHTML = `
      <h3>Loan Estimate</h3>
      <p><strong>Estimated Loan Amount:</strong> ₹${loanAmount.toFixed(2)}</p>
      <p><strong>Total Interest (${tenure} months):</strong> ₹${totalInterest.toFixed(2)}</p>
      <p><strong>Total Repayment:</strong> ₹${totalRepayment.toFixed(2)}</p>
    `;
  }
  
  // CONTACT FORM VALIDATION
  function validateContactForm() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (name === "" || phone === "" || message === "") {
      alert("Please fill in all contact form fields.");
      return false;
    }
  
    if (!/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }
  
    alert("Thank you! We will contact you shortly.");
    return true;
  }
  
  // WHATSAPP CHAT LINK
  function openWhatsApp() {
    const phone = "9976987041";
    const message = encodeURIComponent("Vanakkam! I would like to inquire about gold loans.");
    const url = `https://wa.me/91${phone}?text=${message}`;
    window.open(url, "_blank");
  }
  
  // UPDATE GOLD/SILVER RATE DISPLAY (static simulation)
  function updateRates() {
    const goldRate = 5800; // ₹ per gram (simulated)
    const silverRate = 72;  // ₹ per gram (simulated)
  
    document.getElementById("goldRate").textContent = `₹${goldRate} / gram`;
    document.getElementById("silverRate").textContent = `₹${silverRate} / gram`;
  }
  
  // MOBILE CALL NOW BUTTON
  function initCallButton() {
    const callBtn = document.getElementById("callNowBtn");
    if (callBtn) {
      callBtn.addEventListener("click", () => {
        window.location.href = "tel:+919976987041";
      });
    }
  }
  
  // INITIALIZE FUNCTIONS
  document.addEventListener("DOMContentLoaded", () => {
    updateRates();
    initCallButton();
  
    const calcBtn = document.getElementById("calcBtn");
    if (calcBtn) {
      calcBtn.addEventListener("click", calculateLoan);
    }
  
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        if (!validateContactForm()) e.preventDefault();
      });
    }
  
    const whatsappBtn = document.getElementById("whatsappBtn");
    if (whatsappBtn) {
      whatsappBtn.addEventListener("click", openWhatsApp);
    }
  });
  