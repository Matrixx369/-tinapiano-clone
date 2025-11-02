const axios = require('axios');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const FormData = require('form-data');

// Your Cloudinary credentials
const CLOUDINARY_CLOUD_NAME = 'dfdlwn49l';
const CLOUDINARY_API_KEY = '923653963169819';
const CLOUDINARY_API_SECRET = 'frxAN1pke-vZnro1Ia9RUi-veho';

// Images to download from tinapiano.be/juwelen/ page
const IMAGES_TO_DOWNLOAD = [
  {
    url: 'https://ext.same-assets.com/3019426010/688791092.webp',
    cloudinaryName: 'juwelen-hero',
    description: 'Juwelen Page - Hero Image'
  },
  {
    url: 'https://ext.same-assets.com/3019426010/2649150772.webp',
    cloudinaryName: 'juwelen-category-ringen',
    description: 'Category 1 - Ringen'
  },
  {
    url: 'https://ext.same-assets.com/3019426010/1871366328.webp',
    cloudinaryName: 'juwelen-category-oorringen',
    description: 'Category 2 - Oorringen'
  },
  {
    url: 'https://ext.same-assets.com/3019426010/1065727544.webp',
    cloudinaryName: 'juwelen-category-mannen',
    description: 'Category 3 - Mannen'
  },
  {
    url: 'https://ext.same-assets.com/3019426010/1072932616.webp',
    cloudinaryName: 'juwelen-category-halskettingen',
    description: 'Category 4 - Halskettingen'
  },
  {
    url: 'https://ext.same-assets.com/3019426010/2462445221.webp',
    cloudinaryName: 'juwelen-category-armbanden',
    description: 'Category 5 - Armbanden'
  },
  {
    url: 'https://ext.same-assets.com/3019426010/1792438925.webp',
    cloudinaryName: 'juwelen-category-broches',
    description: 'Category 6 - Broches'
  },
  {
    url: 'https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927798/ringen-19_cgksor.png',
    cloudinaryName: 'juwelen-logo',
    description: 'Logo'
  }
];

// Create temp directory for storing images
const tempDir = path.join(__dirname, 'temp_images');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

// Download image from URL
async function downloadImage(url, filename) {
  console.log(`📥 Downloading: ${filename}...`);
  try {
    const response = await axios.get(url, {
      responseType: 'arraybuffer',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    const filepath = path.join(tempDir, filename);
    fs.writeFileSync(filepath, response.data);
    console.log(`✅ Downloaded: ${filename}`);
    return filepath;
  } catch (error) {
    console.error(`❌ Failed to download ${filename}:`, error.message);
    return null;
  }
}

// Convert image to JPG using sharp
async function convertToJpg(inputPath, outputPath, quality = 80) {
  console.log(`🎨 Converting to JPG: ${path.basename(inputPath)}...`);
  try {
    await sharp(inputPath)
      .jpeg({ quality, progressive: true })
      .toFile(outputPath);
    console.log(`✅ Converted to JPG: ${path.basename(outputPath)}`);
    return outputPath;
  } catch (error) {
    console.error(`❌ Failed to convert ${inputPath}:`, error.message);
    return null;
  }
}

// Upload to Cloudinary
async function uploadToCloudinary(imagePath, publicId) {
  console.log(`☁️  Uploading to Cloudinary: ${publicId}...`);
  try {
    const crypto = require('crypto');
    
    const form = new FormData();
    form.append('file', fs.createReadStream(imagePath));
    form.append('public_id', publicId);
    form.append('api_key', CLOUDINARY_API_KEY);
    
    const timestamp = Math.floor(Date.now() / 1000);
    form.append('timestamp', timestamp);
    
    // Create signature
    const signatureString = `public_id=${publicId}&timestamp=${timestamp}${CLOUDINARY_API_SECRET}`;
    const signature = crypto.createHash('sha1').update(signatureString).digest('hex');
    form.append('signature', signature);
    
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      form,
      {
        headers: form.getHeaders()
      }
    );
    
    console.log(`✅ Uploaded to Cloudinary: ${publicId}`);
    return response.data.secure_url;
  } catch (error) {
    console.error(`❌ Failed to upload to Cloudinary:`, error.response?.data || error.message);
    return null;
  }
}

// Main function
async function processAllImages() {
  console.log('\n🚀 Starting image download, convert, and upload process...\n');
  
  const results = [];
  
  for (const image of IMAGES_TO_DOWNLOAD) {
    console.log(`\n📦 Processing: ${image.description}`);
    console.log('─'.repeat(60));
    
    // Download
    const downloadedPath = await downloadImage(image.url, `${image.cloudinaryName}-original`);
    if (!downloadedPath) continue;
    
    // Convert to JPG
    const jpgPath = path.join(tempDir, `${image.cloudinaryName}.jpg`);
    const convertedPath = await convertToJpg(downloadedPath, jpgPath);
    if (!convertedPath) continue;
    
    // Upload to Cloudinary
    const cloudinaryUrl = await uploadToCloudinary(convertedPath, image.cloudinaryName);
    
    if (cloudinaryUrl) {
      results.push({
        description: image.description,
        cloudinaryName: image.cloudinaryName,
        url: cloudinaryUrl
      });
    }
    
    // Clean up (with error handling)
    try {
      if (fs.existsSync(downloadedPath)) {
        fs.unlinkSync(downloadedPath);
      }
      if (fs.existsSync(convertedPath)) {
        fs.unlinkSync(convertedPath);
      }
    } catch (cleanupError) {
      console.warn(`⚠️  Warning: Could not delete temporary file: ${cleanupError.message}`);
    }
  }
  
  // Print results
  console.log('\n\n' + '='.repeat(60));
  console.log('✨ UPLOAD COMPLETE! Here are your Cloudinary URLs:');
  console.log('='.repeat(60) + '\n');
  
  results.forEach((result, index) => {
    console.log(`${index + 1}. ${result.description}`);
    console.log(`   🔗 ${result.url}\n`);
  });
  
  // Save results to file
  const resultsFile = path.join(__dirname, 'cloudinary-urls.json');
  fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));
  console.log(`📝 Results saved to: ${resultsFile}\n`);
  
  // Cleanup temp directory
  fs.rmSync(tempDir, { recursive: true });
  console.log('🧹 Temporary files cleaned up!\n');
}

// Run the script
processAllImages().catch(error => {
  console.error('❌ Error:', error);
  process.exit(1);
});
