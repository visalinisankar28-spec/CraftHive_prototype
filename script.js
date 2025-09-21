function generateListing() {
    const productWords = document.getElementById('productWords').value || "handmade";
    const listingDiv = document.getElementById('listingPreview');
    const fileInput = document.getElementById('productImage');

    // Get file name
    let fileName = fileInput.files.length ? fileInput.files[0].name : "sample.jpg";

    // Mock AI-generated description
    const description = `This ${productWords} product is crafted with care by local artisans, perfect for daily use.`;
    const translation = `यह ${productWords} उत्पाद स्थानीय कारीगरों द्वारा सावधानी से बनाया गया है, रोज़मर्रा के उपयोग के लिए उपयुक्त है।`;

    // Display listing
    listingDiv.innerHTML = `
        <h3>Product Preview</h3>
        <p><strong>Photo:</strong> ${fileName}</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Translation:</strong> ${translation}</p>
    `;
}
