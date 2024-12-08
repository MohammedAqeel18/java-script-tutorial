document.addEventListener("DOMContentLoaded", function() {
    const popupOverlay = document.getElementById("popup-overlay");
    const popupBox = document.getElementById("popup-box");
    const addPopupButton = document.getElementById("add-popup-button");
    const cancelPopupButton = document.getElementById("cancel-popup");
    const addBookButton = document.getElementById("add-book");
    const bookList = document.getElementById("book-list");

    addPopupButton.addEventListener("click", () => {
        popupOverlay.style.display = "block";
        popupBox.style.display = "block";
    });

    cancelPopupButton.addEventListener("click", () => {
        popupOverlay.style.display = "none";
        popupBox.style.display = "none";
    });

    addBookButton.addEventListener("click", function(event) {
        event.preventDefault();
        addBook();
    });

    function addBook() {
        const bookTitleInput = document.getElementById("book-title-input").value;
        const bookAuthorInput = document.getElementById("book-author-input").value;
        const bookDescriptionInput = document.getElementById("book-description-input").value;

        if (bookTitleInput && bookAuthorInput && bookDescriptionInput) {
            const bookContainer = document.createElement("div");
            bookContainer.classList.add("book-container");

            bookContainer.innerHTML = `
                <h2>${bookTitleInput}</h2>
                <h5>${bookAuthorInput}</h5>
                <p>${bookDescriptionInput}</p>
                <button class="delete-btn">Delete</button>
            `;

            bookList.appendChild(bookContainer);

            bookContainer.querySelector(".delete-btn").addEventListener("click", function() {
                bookList.removeChild(bookContainer);
            });

            // Clear input fields
            document.getElementById("book-title-input").value = "";
            document.getElementById("book-author-input").value = "";
            document.getElementById("book-description-input").value = "";

            // Hide the popup
            popupOverlay.style.display = "none";
            popupBox.style.display = "none";
        } else {
            alert("Please fill in all fields.");
        }
    }
});
