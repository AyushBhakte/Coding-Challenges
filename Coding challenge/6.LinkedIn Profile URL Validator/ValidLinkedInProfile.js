// Function to validate LinkedIn profile URLs
function isValidLinkedInProfile(url) {
    // Regular expression to match valid LinkedIn profile URLs
    const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

    // Test the URL against the regex
    if (linkedinRegex.test(url)) {
        console.log("The input is a valid LinkedIn profile URL.");
    } else {
        console.log("The input is not a valid LinkedIn profile URL.");
    }
}

// Example LinkedIn profile URLs to test
const url1 = "https://www.linkedin.com/in/johndoe123";
const url2 = "https://www.linkedin.com/in/jane_doe-456";
const url3 = "https://www.linkedin.com/in/short";
const url4 = "https://www.linkedin.com/in/this-profile-id-is-way-too-long-for-the-validation";
const url5 = "https://www.linkedin.com/in/invalid_profile@id";
const url6 = "https://www.linkedin.com/in/anotherValid123";

// Test the URLs
isValidLinkedInProfile(url1); // Valid
isValidLinkedInProfile(url2); // Valid
isValidLinkedInProfile(url3); // Valid
isValidLinkedInProfile(url4); // Invalid
isValidLinkedInProfile(url5); // Invalid
isValidLinkedInProfile(url6); // Valid
