// Function to check if a URL is valid
function isValidURL(url) {
    // Regular expression to match valid URLs
    const urlRegex = /^(https?:\/\/)[\w\-._~:\/?#@!$&'()*+,;=%]+(\.[a-zA-Z]+)$/;

    // Test the URL against the regex
    if (urlRegex.test(url)) {
        console.log("The input is a valid URL.");
    } else {
        console.log("The input is not a valid URL.");
    }
}

// Example URLs to test
const url1 = "http://example.com";
const url2 = "https://example-site.com";
const url3 = "ftp://invalid-url.com";
const url4 = "https://valid-url.org";
const url5 = "http:/invalid-url";

// Test the URLs
isValidURL(url1); // Valid
isValidURL(url2); // Valid
isValidURL(url3); // Invalid
isValidURL(url4); // Valid
isValidURL(url5); // Invalid
