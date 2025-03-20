// Load DOM content
document.addEventListener("DOMContentLoaded", function () {
    var _a;
    var contentSection = document.querySelector(".content");
    var addBorderBtn = document.getElementById("add-border-btn");
    var changeTextBtn = document.getElementById("change-text-btn");
    var toggleBgBtn = document.getElementById("toggle-bg-btn");
    var resetBtn = document.createElement("button");
    // Create Reset Button
    resetBtn.id = "reset-btn";
    resetBtn.textContent = "Reset";
    (_a = document.querySelector(".action-buttons")) === null || _a === void 0 ? void 0 : _a.appendChild(resetBtn);
    // Save initial styles
    var initialStyles = {
        border: contentSection.style.border,
        color: contentSection.style.color,
        backgroundColor: contentSection.style.backgroundColor,
        boxShadow: contentSection.style.boxShadow,
    };
    // Add border to the content section when the "Add Border" button is clicked
    addBorderBtn.addEventListener("click", function () {
        contentSection.style.border = "2px solid red";
    });
    // Change text color to blue when "Change Text Color" button is clicked
    changeTextBtn.addEventListener("click", function () {
        contentSection.style.color = "blue";
    });
    // Toggle background color to gray when "Toggle Background" button is clicked
    toggleBgBtn.addEventListener("click", function () {
        contentSection.style.backgroundColor =
            contentSection.style.backgroundColor === "gray" ? "" : "gray";
    });
    // Add box-shadow on mouseover for the content section
    contentSection.addEventListener("mouseover", function () {
        contentSection.style.boxShadow = "12px 12px 2px 1px rgba(0, 0, 255, 0.2)";
    });
    // Remove box-shadow on mouseout
    contentSection.addEventListener("mouseout", function () {
        contentSection.style.boxShadow = "none";
    });
    // Add event listener for keypress
    document.addEventListener("keydown", function (event) {
        console.log("Key pressed: ".concat(event.key));
    });
    // Reset button functionality
    resetBtn.addEventListener("click", function () {
        contentSection.style.border = initialStyles.border;
        contentSection.style.color = initialStyles.color;
        contentSection.style.backgroundColor = initialStyles.backgroundColor;
        contentSection.style.boxShadow = initialStyles.boxShadow;
    });
});
