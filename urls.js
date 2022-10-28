const axios = require('axios');
const fs = require('fs');
const { url } = require('inspector');
const argv = process.argv;
let txtFile;

// This will extract the file name from argv
for(let arg of argv){
  if(arg.includes('.txt')){
    txtFile = arg;
  }
}

// This will extract the contents of the file and assign it to the var fileContents
const fileContents = fs.readFileSync(txtFile, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }  
  return data;
});

const arrOfUrls = fileContents.split("\n")

/*

The function below will take am array of URL's and then make a call to each of them. 
If a respone is given the contents of the website is extracted and placed into a new file

*/

async function getPage(url){
  for(website of url){
    if(website !== ''){
      await axios.get(website)
      .then((res)=>{
        // These 3 functions scrub the website url of everything but the pages name
        const cleaningfileName = website.replaceAll('https://', '').replaceAll('http://', '').replaceAll('www.', '');
        const indexNum = cleaningfileName.indexOf('.');
        const fileName = cleaningfileName.slice(0, indexNum+4);
        // This will attempt to write the page contents to a file
        try {
          fs.writeFileSync(`./${fileName}.txt`, res.data);
          console.log('Successfully wrote to file!');
        } catch (error) {
          console.error(`File write failed: ${error}`)
          process.exit(1);
        }
      }).catch((err)=>{
        console.log(`${website} could not be reached`)
    })
    }
  }
  
}





getPage(arrOfUrls);

