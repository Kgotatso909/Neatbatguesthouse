// Flatpickr for Date Picking
flatpickr("#check_in_date", {
  minDate: "today",
  dateFormat: "Y-m-d",
});
flatpickr("#check_out_date", {
  minDate: "today",
  dateFormat: "Y-m-d",
});

// Conditional Fields Logic
const roomSelect = document.getElementById("room");
const checkInDateContainer = document.getElementById("checkInDateContainer");
const checkOutDateContainer = document.getElementById("checkOutDateContainer");
const specialRequestContainer = document.getElementById(
  "specialRequestContainer"
);

roomSelect.addEventListener("change", function () {
  if (this.value === "none") {
    checkInDateContainer.style.display = "none";
    checkOutDateContainer.style.display = "none";
    specialRequestContainer.style.display = "block";
  } else {
    checkInDateContainer.style.display = "block";
    checkOutDateContainer.style.display = "block";
    specialRequestContainer.style.display = "none";
  }
});

// Custom Form Validation with Toast Message
const form = document.getElementById("bookingForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;
  const formData = new FormData(form);

  // Custom validation for required fields
  formData.forEach((value, key) => {
    const field = document.getElementById(key);
    if (!value) {
      field.style.borderColor = "red";
      valid = false;
    } else {
      field.style.borderColor = "";
    }
  });

  if (valid) {
    showToast();
    form.reset();
  }
});

// Show Toast Notification
function showToast() {
  const toast = document.getElementById("toast");
  toast.style.display = "block";
  setTimeout(() => {
    toast.style.display = "none";
  }, 3000);
}
