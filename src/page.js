// create page
const createPage = data => {
    return `# ${data.title}
    ## Description 
    ${data.description}
    ## Usage 
    ${data.usage}
    ## Questions
    For more infomration email ${data.email}. 
  `;
  }
  // export page to index 
  module.exports = createPage;