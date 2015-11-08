$(document).ready(function() {
  $('.plus').kycoGooglePlusFeed2({
    id: '102467684150504816942',
    // feedPosts: 2,           // Feed posts to show on load
    // postsIncrement: 1,      // Number of feed posts to show on "Show more" button click
    maxPosts: 5,            // Max number of posts to pull before "Show more" will go to Google+, cannot excced 20 because of Google API in use
    profileImageSize: 150,  // Max is 250
    fadeSpeed: 0,           // Fade-in animation duration
    loadAttachments: false, // Load images, videos, links and other attachments into feed?
    orderBy: 'popularity',  // Either 'date' or 'popularity'
    // sort: 'asc',            // Either 'asc' or 'desc'
    // lang: 'de'              // Default language, can also be set to 'de'
  });
});
