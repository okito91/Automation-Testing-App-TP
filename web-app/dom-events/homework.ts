    // Load DOM content
document.addEventListener("DOMContentLoaded", () => {
    const contentSection = document.querySelector(".content") as HTMLElement;
    const addBorderBtn = document.getElementById("add-border-btn") as HTMLButtonElement;
    const changeTextBtn = document.getElementById("change-text-btn") as HTMLButtonElement;
    const toggleBgBtn = document.getElementById("toggle-bg-btn") as HTMLButtonElement;
    const resetBtn = document.createElement("button");
  
    // Create Reset Button
    resetBtn.id = "reset-btn";
    resetBtn.textContent = "Reset";
    document.querySelector(".action-buttons")?.appendChild(resetBtn);
  
    // Save initial styles
    const initialStyles = {
      border: contentSection.style.border,
      color: contentSection.style.color,
      backgroundColor: contentSection.style.backgroundColor,
      boxShadow: contentSection.style.boxShadow,
    };
  
    // Add border to the content section when the "Add Border" button is clicked
    addBorderBtn.addEventListener("click", () => {
      contentSection.style.border = "2px solid red";
    });
  
    // Change text color to blue when "Change Text Color" button is clicked
    changeTextBtn.addEventListener("click", () => {
      contentSection.style.color = "blue";
    });
  
    // Toggle background color to gray when "Toggle Background" button is clicked
    toggleBgBtn.addEventListener("click", () => {
      contentSection.style.backgroundColor =
        contentSection.style.backgroundColor === "gray" ? "" : "gray";
    });
  
    // Add box-shadow on mouseover for the content section
    contentSection.addEventListener("mouseover", () => {
      contentSection.style.boxShadow = "12px 12px 2px 1px rgba(0, 0, 255, 0.2)";
    });
  
    // Remove box-shadow on mouseout
    contentSection.addEventListener("mouseout", () => {
      contentSection.style.boxShadow = "none";
    });
  
    // Add event listener for keypress
    document.addEventListener("keydown", (event: KeyboardEvent) => {
      console.log(`Key pressed: ${event.key}`);
    });
  
    // Reset button functionality
    resetBtn.addEventListener("click", () => {
      contentSection.style.border = initialStyles.border;
      contentSection.style.color = initialStyles.color;
      contentSection.style.backgroundColor = initialStyles.backgroundColor;
      contentSection.style.boxShadow = initialStyles.boxShadow;
    });
  });
