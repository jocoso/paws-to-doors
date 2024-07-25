
# Paws to Doors - Pet Adoption Agency Website

**“WHO LET THE DOGS OUT? YOU! YOU! YOU!”**

## Project Description

“Paws to Doors” is a pet adoption agency website designed to help unite paws with loving owners. Created with love, the site facilitates a practical and accessible way for pet lovers to find and adopt pets, and for pet owners to find homes for pets in need.

## User Story

As a pet lover looking to adopt, I want to browse available pets, post pets needing homes, and connect with local shelters, so that I can find the perfect pet to adopt and ensure pets in need find loving homes.

## Wireframe

[Include link or image of the wireframe]

## APIs Used

- **RescueGroups API** or **Petfinder API**
- **TheDogAPI**
- **TheCatAPI**
- **OpenCage Geocoding API** (for location)

## Technologies Used

- **Node.js**
- **Express.js**
- **Handlebars.js** (Template Engine)
- **PostgreSQL** (Database)
- **Sequelize ORM**
- **Bootstrap** (CSS Framework)

## Project Requirements

- Use Node.js and Express.js to create a RESTful API.
- Use Handlebars.js as the template engine.
- Use PostgreSQL and Sequelize ORM for the database.
- Implement both GET and POST routes for retrieving and adding new data.
- Use at least one new library, package, or technology that we haven’t discussed.
- Follow the MVC paradigm for folder structure.
- Include authentication (express-session and cookies).
- Protect API keys and sensitive information with environment variables.
- Deploy using Render (with data).
- Ensure the UI is polished and responsive.
- Make the site interactive (accept and respond to user input).
- Adhere to good-quality coding standards.
- Create a professional README with a unique name, description, technologies used, screenshot, and link to the deployed application.

## Breakdown of Tasks/Pseudocode

### Tatiana

- HTML
- CSS
- Template Engine
- Polishing UI
- README

### Marquan

- API Keys and Sensitive Information with Environment Variables
- JavaScript
- Database
- SQL

### Josh

- Create Repo/Assign Host
- Organize Files
- Delegate Tasks on GitHub
- SQL
- README

### Ahmed

- RESTful API
- Database
- Ensure Site Responsiveness/Interactivity
- GET and POST Routes for New Data
- Authentication
- Seeds
- SQL

## Tasks

- Create Repo/Assign Host
- HTML
- CSS
- Database
- Template Engine
- RESTful API
- GET and POST Routes for New Data
- Seeds
- ENV
- MVC Paradigm Folder Structure
- New Tech/Library/Packages
- Authentication
- API Keys and Sensitive Information with Environment Variables
- Polishing UI
- Ensure Site Responsiveness/Interactivity
- README

## Starting Issues

### Issue 1 – Create starting HTML with boilerplate, Bootstrap CDN, Handlebars

**User Story:** As a user, I want to view this app in my browser, so that I can access the information.

**Acceptance Criteria:** 
- **GIVEN**: I open the index.html file
- **WHEN**: The page loads
- **THEN**: I see a selection of two buttons, one for dogs and the other for cats.

### Issue 2 – Creating unit navigation buttons

**User Story:** As a user, I want to be able to filter between cats and dogs so I can get a more accurate table of pets to select from.

**Acceptance Criteria:** 
- **GIVEN**: I open the index.html file
- **WHEN**: The page loads
- **AND WHEN**: I click a button for a pet (cat or dog)
- **THEN**: The content in the main area of the page is dynamically updated.

### Issue 3 – Implementing RescueGroups API

**User Story:** As a user, I want to stay up to date with what pets are available for adoption.

**Acceptance Criteria:** 
- **GIVEN**: I click a button for a pet (cat or dog)
- **WHEN**: The page loads with multiple options of pets of the same kind (depending on what button we clicked on).
- **THEN**: I click on a pet, and the main area of the page is dynamically updated with pet image, info, location, and a button to log in to adopt.

## Presentation Requirements

- **Elevator pitch:** A one-minute description of your application.
- **Concept:** What is your user story? What was your motivation for development?
- **Process:** What were the technologies used? How were tasks and roles broken down and assigned? What challenges did you encounter? What were your successes?
- **Demo:** Show your application in action.
- **Future Development:** Directions for future development.
- **Links:** Provide links to the deployed application and the GitHub repository.

## Grading Criteria

### Technical Acceptance Criteria: 25%

- Application uses a Node.js and Express.js back end and uses both GET and POST routes for retrieving and adding new data.
- Application has a folder structure that meets the MVC paradigm and uses Handlebars.js as the template engine.
- Application is backed by a PostgreSQL database with a Sequelize ORM and protects API keys and sensitive information with environment variables.
- Application includes user authentication (express-session and cookies).
- Application uses at least one new library, package, or technology not covered in class.

### Concept: 10%

- Application should be a unique and novel idea.
- Your group should clearly and concisely articulate your project idea.

### Deployment: 20%

- Application deployed at live URL on Render and loads with no errors.
- Application GitHub URL submitted.

### Repository Quality: 10%

- Repository has a unique name.
- Repository follows best practices for file structure and naming conventions.
- Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
- Repository contains multiple descriptive commit messages.
- Repository contains a quality README file with description, screenshot, and link to the deployed application.

### Application Quality: 15%

- Application user experience is intuitive and easy to navigate.
- Application user interface style is clean and polished.
- Application is responsive.

### Presentation: 10%

- Your group should present using PowerPoint or a similar presentation software.
- Every group member should speak during the presentation.
- Your presentation should follow the Project Presentation Template.

### Collaboration: 10%

- There are no major disparities in the number of GitHub contributions between group members.

## How to Submit Your Interactive Full-Stack Project

Each member of your group is required to submit the following for review:

- The URL of the deployed application.
- The URL of the GitHub repository, with a unique name and a README describing the project.
