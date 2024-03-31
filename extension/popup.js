async function fetchBookmarks() {
    try {
        const response = await fetch('http://bookmark-zeta-flame.vercel.app/api/getbookmark');
        const bookmarks = await response.json();
        const bookmarkList = document.getElementById('bookmarkList');
        bookmarkList.innerHTML = ''; // Clear existing list
        bookmarks.forEach(bookmark => {
            const listItem = document.createElement('li');
            const bookmarkDiv = document.createElement('div');
            bookmarkDiv.className = "flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32 m-2";
            const bookmarkName = document.createElement('span');
            bookmarkName.className = "text-[12px] font-semibold lg:text-[16px]";
            bookmarkName.textContent = bookmark.name;
            bookmarkDiv.appendChild(bookmarkName);
            const bookmarkLink = document.createElement('a');
            bookmarkLink.href = bookmark.link;
            bookmarkLink.target = "_blank"; // Open link in new tab
            bookmarkLink.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevents the form from submitting when clicked
            });
            if (bookmark.link.includes('mail.google.com')) {
                const img = document.createElement('img');
                img.src = 'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico';
                img.alt = bookmark.name;
                img.style.width = '20px';
                bookmarkLink.appendChild(img);
            } else {
                const img = document.createElement('img');
                img.src = `${bookmark.cleanedLink}/favicon.ico`;
                img.alt = bookmark.name;
                img.style.width = '20px';
                img.className = "w-12 h-12 md:w-12 md:h-12";
                bookmarkLink.appendChild(img);
            }
            bookmarkDiv.appendChild(bookmarkLink);
            listItem.appendChild(bookmarkDiv);
            bookmarkList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching bookmarks:', error);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Function to add bookmark
    const form = document.getElementById('bookmarkForm');
    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const link = document.getElementById('link').value;

        try {
            const response = await fetch('https://bookmark-zeta-flame.vercel.app/api/bookmarks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, link })
            });
            if (response.ok) {
                alert('Bookmark added successfully!');
                window.close(); // Close the popup after submission
            } else {
                throw new Error('Failed to add bookmark');
            }
        } catch (error) {
            console.error('Error adding bookmark:', error);
            alert('Failed to add bookmark');
        }
    });

    // Fetch bookmarks and add event listeners after the DOM content is loaded
    fetchBookmarks();
});
