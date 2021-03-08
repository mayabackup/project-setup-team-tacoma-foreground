## Description of the project

## Description of the project and Product Vision Statement
**Goal.** The COVID Travel Agent app is designed to provide prospective travelers with the most relevant knowledge to help them make a well-informed decision on international travel during the COVID pandemic. Particularly, the app aims at creating a personalized, comprehensive list of safest travel destinations based on the user's inputs (e.g. location, citizenship etc.), allowing the user to choose the most suitable destination for travel.<br>

**Who are the users?** The target user of the app is anyone who wants to learn where he or she can travel, how safe each possible destination is and what are the requirements to travel there. The app facilitates decision making process for a traveler as it breaks the process into steps (steps include finding a safe destination, analyzing its COVID related data, booking a flight etc.) and guides the user through each of the steps. <br>
For travelers who want to travel only to one specific country, the app does not guarantee that the desired country will appear in the top ranked list. In this case, the traveler can still benefit from using the app by observing if the desired country was included in the top safest list or not and making decisions accordingly. The user can also optionally explore safe countries located in the same continent as the desired country. <br>

**Why use the app?** Notably, the COVID Travel Agent app collects and presents the relevant COVID and travel data that travelers, on their own, can usually gather only after a significant amount of research. This is due to the fact that the list of search outcomes (list of safest countries) is based on intersection of a diverse set of non-related user inputs (location, citizenship etc. )- it is usually difficult to find data for a particular intersection.<br>

**Main features.** Every location that the app lists has a total safety score and individual scores for various COVID related data categories (number of cases, vaccination rate etc.). This way a user can make a decision based on the data characteristics that are most important to them and find the most suitable travel destination. 

### Minimum Viable Product
Generally, for the Minimum Viable Product of the app, the user will be able to enter limited number of inputs and view the top safest locations based on these inputs and COVID related information. The COVID related information will be based on some of the main COVID related data points/categories. The number of countries that potentially can be ranked and for which the scores can be potentially calculated (countries for which the COVID data is available) will be also limited (more details below). <br>

**User inputs to be collected:**<br>
For the MVP, the app will allow the user to calculate top safest locations based on the following inputs: current location, citizenship, desired airport. <br>
After MVP is completed, advanced input options such as desired continent, reason for travel can be also collected. <br>

**Data points/categories to be collected:**<br>
In order to provide the safest countries in regards to COVID, we need to collect COVID related data, which can be divided into several categories based on content. For the MVP, the data categories that will be collected and used to calculate the safest locations will include the following categories: 
- % of general population vaccinated
- COVID cases registered at the location
- Quarantine periods 
- Mortality risk
- Requirements for travelers
- Flight cost <br>
After MVP is completed, other data categories such as *workplace closures*, *school closures* can be potentially added to compute the top safest locations. <br>

Also, for the MVP, the app will track COVID related entry restrictions worldwide (e.g. whether citizenship is required to enter the country). The value for the variable that stores info about 'entry restrictions' for a specific user and a specific country will be binary - 1 if the user can enter the country and 0 if can't. This value can be calculated based on the country's entry regulations, user's citizenship and current location. Entry restrictions affect what countries will be visible for the users.

**Travel destinations available to be ranked**
The usability and completeness of our product is largely based on the number of potential travel destinations we are able to offer to our users i.e. number of countries for which the app can calculate the total score. For the MVP, the app will be able to potentially rank/calculate score for 60 (roughly 10 per continent) countries. <br>
After MVP is completed, the final goal for the app is to be able to calculate score for 120 locations (roughy 20 per continent). I do not aim to split our target location numbers evenly between continents due to the fact that the number of countries in each continent can vary. For example, Oceania may not have 10/20 locations that track all the necessary COVID information. <br>

**Functionality.**
For the MVP, the following functionality will be available: 
- The user can enter the input values such as location, citizenship and desired airport. 
- Based on user's inputs and the worldwide entry restrictions, all locations unavailable for the user will be excluded. 
- For the remaining countries, the app will assign scores for each data category (score for number of cases, % of population vaccinated etc.). For example, the countries with higher numbers of registered COVID cases will receive lower score. 
- Total scores for all categories will be computed for each location and locations will be recommended based on this total score.
- The user will be able to sort destinations based on the individual categories, so that they can rank locations based on the metrics most important to them. 
After the MVP is completed, the feature to receive travel updates (based on location) can be added. Also, the following features such as contacting the project team, viewing featured safest locations, viewing flight information etc. can be further added.  
- Data tracked will be live so that users will consistenly view the most accurate and up-to-date information. Therefore, the recommendations will change as the scores will change based on the newly available data.

**Technical requirements**
- We will need a large database to store all the information and a program that will scrape live data and update our database.
- We need to build a decision engine that can be fed live data from the database and output top safest locations for each user (based on travel restrictions, COVID data category rankings and 'total score').

## Team Members

**Adam Ethan** - Junior at New York University studying Computer Science<br>
Github:  <a href="https://github.com/AdamEthan" target="_blank">Adam Ethan</a>

**Alifa Faruk** - Senior at New York University studying Computer Science<br>
Github:  <a href="https://github.com/alifafaruk" target="_blank">Alifa Faruk</a>

**Almazhan Kapan** - Senior at New York University studying Computer Science<br>
Github:  <a href="https://github.com/almazhankapan" target="_blank">Almazhan Kapan</a>

**Maya Sijaric** - Senior at New York University studying Computer Science<br>
Github:  <a href="https://github.com/sijaric" target="_blank">Maya Sijaric</a>

**Rajan Bharaj** - Senior at New York University studying Computer Science<br>
Github:  <a href="https://github.com/RajanBharaj/" target="_blank">Rajan Bharaj</a>

**Roman Haberli** - Senior at New York University studying Computer Science<br>
Github:  <a href="https://github.com/rhaberli/" target="_blank">Roman Haberli</a>


## History

"I was on a call with an old friend, who for fun had decided to create a website tracking live COVID vaccination rates across the US. I asked him how readily available that data was and he said that the data is not hard to find or to keep it updated. Days later, of my own accord, I was scrolling through <a href="https://www.skyscanner.net/" target="_blank">skyscanner</a> to dream about future holidays. I found that the COVID related info for every location was very limited and really the only thing they provide was the requirements for flights. As the summer is approaching, millions of potential travelers are hoping they might be able to travel safely. For people who travel with their elderly family members, for people who are health conscious and for people who just want to reduce the chance of catching the infection, I decided to create COVID Travel Agent." (Rajan)

The success of the product is directly related to how well we can incorporate the data for as many travel destinations as possible. My team and I will put our best efforts to provide users with as many travel destination options as possible, but unfortunately, we cannot collect and summarize the data from every known travel destination ourselves. As an open source project, we are looking for developers to submit accurate COVID data about any travel destinations not listed on our website. An index of current locations tracked and more information about contributing can be found at [CONTRIBUTING.md](./CONTRIBUTING.md).

## How to contribute? 
Thank you for your interest! To contribute to the project, please review the [CONTRIBUTING.md](./CONTRIBUTING.md) file. 

## Instructions for building and testing the project

To build the project, please install the following software:   <br>
- Install <a href="https://git-scm.com/" target="_blank">Git</a> to follow the git workflow specified for team members and external contributors. 
- Install <a href="https://nodejs.org/" target="_blank">Node.js</a> to contribute to and test the code. 
- Install <a href="https://reactjs.org/" target="_blank">React.js</a> to contribute to and test the code. 
- Install <a href="https://code.visualstudio.com/download" target="_blank">Visual Studio Code</a> and recommended linter to standardize the formatting of the code. <br>
To contribute to the project, please refer to the 'Rules for contributors' and 'Git workflow for team members' sections in the [CONTRIBUTING.md](./CONTRIBUTING.md) file. 
Testing instructions will be updated later.  

## Additional resources

If you are interested to view the data sources that power the app, you can visit <a href="https://ourworldindata.org/coronavirus" target="_blank">Our World in Data</a><br>.

