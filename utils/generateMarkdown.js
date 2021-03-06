// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[Link](https://opensource.org/licenses/${license})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 if(license !== 'None') {  
  return `## License 

  - ${renderLicenseLink(license)}
  
  ## Badges
  
  - ${renderLicenseBadge(license)}`
} else {
  return ''
}
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}

  ## Description
  
  - ${data.motivation}
  - ${data.why}
  - ${data.problem}
  - ${data.learn}
  
  ## Installation
  
  - ${data.installation}
  
  ## Usage
  
  - ${data.usage}
  
  ## Credits
  
  - ${data.collaborators} - (${data.github})

 ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
