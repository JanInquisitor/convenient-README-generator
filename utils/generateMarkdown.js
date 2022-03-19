// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
// }
//
// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
// }
//
// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    let result = ``;
    if (data.title) result += `# ${data.title} \n made by [${data.username}](https://github.com/${data.username}).`
    result += '\n';
    if (data.description) result += `## Description: \n ${data.description} \n`

    result +=`
## Table of contents
    
  * [Install](#installation)\n
  * [Usage](#usage)\n
  * [Collaborators](#Collaborators)\n
  * [Features](#Features)\n
  * [Contact me](#Contact me)\n

`
    if (data.installation) result += "## installation \n" + "```" + "\n" + `${data.installation} \n` + "```" + "\n"
    result += '\n';
    if (data.usage) result += `## Usage \n ${data.usage} \n`
    result += '\n';
    if (data.collaborators) result += `## Collaborators \n ${data.collaborators} \n`
    result += '\n';
    if (data.features) result += `## Features: \n ${data.features} \n`
    result += '\n';
    if(data.email) result += `## Contact me: \n ${data.email}`


    return result;
}

module.exports = generateMarkdown;
