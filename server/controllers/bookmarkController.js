
const Bookmark = require('../models/bookmark');
const axios = require('axios')


const cleanLink = (link) => {
  const [baseUrl] = link.split('?');
  const segments = baseUrl.split('/');
  const protocol = segments[0];
  const domain = segments[2];

  let cleanedLink = `${protocol}//${domain}`;

  // Check if the domain is gmail.com
  if (domain === 'mail.google.com') {
      // For Gmail bookmarks, use a different link
      cleanedLink = 'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico';
  }

  return cleanedLink;
};




//creating bookmark
exports.createBookmark = async (req, res) => {
    try {
      const { name, link } = req.body;
  
      if (!name || !link) {
        return res.status(400).json({ message: "Name and Link are required" });
      }
  
      const cleanedLink = cleanLink(link);

      const bookmark = await Bookmark.create({ name, link, cleanedLink });
  
     return res.status(201).json(bookmark);
    } catch (error) {
      console.error("Error creating bookmark:", error);
     return res.status(500).json({ message: "Server Error" });
    }
  };


//Getting Bookmark// Getting Bookmark
exports.getbookmark = async (req, res) => {
  try {
    // Fetch all bookmarks from the database
    const bookmarks = await Bookmark.find();
   return res.status(200).json(bookmarks);
  } catch (error) {
    console.error('Error fetching bookmarks:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
