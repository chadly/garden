// https://chat.openai.com/share/4ebb7c60-f704-48eb-b7b6-d828635cf43d

import fs from 'fs';
import path from 'path';

// Read the urls.txt file
const filePath = path.join(process.cwd(), 'urls.txt');
const fileContent = fs.readFileSync(filePath, 'utf-8');

// Split the file content by empty lines to get blocks
const blocks = fileContent.split('\n\n');

// Initialize the redirects array
const redirects = [];

// Process each block using for...of syntax
for (const block of blocks) {
  // Split the block by newline to get individual URLs
  const urls = block.split('\n');
  
  // The first URL is the destination, the rest are sources
  const destination = urls[0];
  const sources = urls.slice(1);
  
  // Create redirect objects for each source using for...of syntax
  for (const source of sources) {
    redirects.push({
      source,
      destination,
      permanent: true,
    });
  }
}

// Create the vercel.json object
const vercelJson = {
  cleanUrls: true,
  redirects,
};

// Write the vercel.json file
const outputFilePath = path.join(process.cwd(), 'vercel.json');
fs.writeFileSync(outputFilePath, JSON.stringify(vercelJson, null, 2));

console.log('vercel.json has been written successfully.');
