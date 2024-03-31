// frontend/components/BookmarkList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookmarkList = () => {
    const [bookmarkData, setBookmarkData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://bookmark-zeta-flame.vercel.app/api/getbookmark');
                const modifiedData = response.data.map(bookmark => ({
                    ...bookmark,
                    imageUrl: bookmark.link.includes('mail.google.com')
                        ? 'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico'
                        : `${bookmark.cleanedLink}/favicon.ico`
                }));

                setBookmarkData(modifiedData);
            } catch (error) {
                console.error('Error fetching bookmark data:', error);
            }
        };

        fetchData();
    }, [bookmarkData]);

    return (
        <div>
        {bookmarkData.length > 0 && (
            <div className='flex flex-wrap'>
                {bookmarkData.map((bookmark, index) => (
                    <a key={index} href={bookmark.link} target="_blank" rel="noopener noreferrer">
                        <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32 m-2">
                            {bookmark.imageUrl && (
                                <img src={bookmark.imageUrl} alt={bookmark.name} className="w-12 h-12 md:w-12 md:h-12" />
                            )}
                            {!bookmark.imageUrl && (
                                <div className="w-12 h-12 md:w-16 md:h-16" />
                            )}
                            <span className="text-[12px] font-semibold lg:text-[16px]">{bookmark.name}</span>
                        </div>
                    </a>
                ))}
            </div>
        )}
    </div>
    );
};

export default BookmarkList;
