## Project Description

#### Product Vision Statement

The COVID Travel Agent app is designed to provide prospective travelers with the most relevant information to help them make a well-informed decision on international travel during the COVID pandemic. Particularly, the app aims to create a personalized, comprehensive list of safest travel destinations based on the user information (e.g. location, citizenship etc.), allowing the user to choose the most suitable destination for them. <br>

**Who are the users?** The target user of the app is anyone who wants to learn where they can travel, how safe each possible destination is and what the requirements to travel there are. The app facilitates the decision making process for a traveler as it breaks the process into steps: finding a safe destination, analyzing its COVID related data, booking a flight. We guide the user seamlessly through each of these steps. <br>

**Who is not in our target market** For travelers who want to travel only to one specific location, the app does not guarantee that the desired location will appear in the top ranked list. In this case, the traveler can still benefit from using the app if the desired location is included in our index and view specific COVID data for their location. The user can also optionally explore travel resources, generic for all travelers.<br>

**Why use the app?** Notably, the COVID Travel Agent app collects and presents the relevant COVID and travel data that travelers can usually only gather after a significant amount of research. This is due to the fact that the list of search outcomes (list of safest countries) is based user input and we can provide data for a significant portion of possible destinations for each user, complete with corresponding COVID data.<br>

**Main features.** Every location that the app lists has a total safety score and individual scores for various COVID related data categories (number of cases, vaccination rate etc.). This way users can make a decisions based on the data characteristics that are most important to them and find the most suitable travel destination. 

### Minimum Viable Product
The user will be able to enter limited number of inputs and view the top safest locations based on these inputs and COVID related information. The COVID related information will be based on some of the main COVID related data points/categories. The number of countries that potentially can be ranked and for which the scores can be potentially calculated (countries for which the COVID data is available) will be also limited (more details below). <br>

1. **User inputs to be collected.**<br>
For the MVP, the app will allow the user to calculate top safest locations based on the following inputs: current location, citizenship, desired airport. <br>
After MVP is completed, advanced input options such as desired continent, reason for travel can be also collected. <br>

2. **Data points/categories to be collected.** <br>
In order to provide the safest countries in regards to COVID, we need to collect COVID related data, which can be divided into several categories based on content. For the MVP, the data categories that will be collected and used to calculate the safest locations will include the following categories: 
- % of general population vaccinated
- COVID cases registered at the location
- Quarantine periods 
- Mortality risk
- Requirements for travelers
- Flight cost <br>
After MVP is completed, other data categories such as *workplace closures*, *school closures* can be potentially added to compute the top safest locations. <br>
Also, for the MVP, the app will track COVID related entry restrictions worldwide (e.g. whether citizenship is required to enter the country). The value for the variable that stores info about 'entry restrictions' for a specific user and a specific country will be binary - 1 if the user can enter the country and 0 if can't. This value can be calculated based on the country's entry regulations, user's citizenship and current location. Entry restrictions affect what countries will be visible for the users.

3. **Travel destinations available to be ranked.**<br>
The usability and completeness of our product is largely based on the number of potential travel destinations we are able to offer to our users i.e. number of countries for which the app can calculate the total score. For the MVP, the app will be able to potentially rank/calculate score for 60 (roughly 10 per continent) countries. <br>
After MVP is completed, the final goal for the app is to be able to calculate score for 120 locations (roughy 20 per continent). I do not aim to split our target location numbers evenly between continents due to the fact that the number of countries in each continent can vary. For example, Oceania may not have 10/20 locations that track all the necessary COVID information. <br>

4. **Functionality.**<br>
For the MVP, the following functionality will be available: 
- The user can enter the input values such as location, citizenship and desired airport. 
- Based on user's inputs and the worldwide entry restrictions, all locations unavailable for the user will be excluded. 
- For the remaining countries, the app will assign scores for each data category (score for number of cases, % of population vaccinated etc.). For example, the countries with higher numbers of registered COVID cases will receive lower score. 
- Total scores for all categories will be computed for each location and locations will be recommended based on this total score.
- The user will be able to sort destinations based on the individual categories, so that they can rank locations based on the metrics most important to them. 
After the MVP is completed, the feature to receive travel updates (based on location) can be added. Also, the following features such as contacting the project team, viewing featured safest locations, viewing flight information etc. can be further added.  
- Data tracked will be live so that users will consistenly view the most accurate and up-to-date information. Therefore, the recommendations will change as the scores will change based on the newly available data.

5. **Technical requirements.**
- We will need a large database to store all the information and a program that will scrape live data and update our database.
- We need to build a decision engine that can be fed live data from the database and output top safest locations for each user (based on travel restrictions, COVID data category rankings and 'total score').

#### Process after establishing vision. 
The team referred to the [Scrum Framework documentation](https://knowledge.kitchen/Scrum_development_framework#Product_vision_statement) and [Outline for translating Features to User Stories](http://idiacomputing.com/pub/UserStories.pdf) to define themes and features. <br>
1. **Themes.** According to the Scrum Framework documentation mentioned above, 
>Themes are categories of user stories that can conceptually be grouped together to indicate a related set of 
> requirements. <br>

The following Theme can be defined for the MVP vision: <br>

*The app should be able to calculate top safest locations based on the inputs provided by the user.* 

2.  **Features.** According to the Scrum Framework documentation, 
>Features are high-level User Stories that are suitable for a Product Backlog, but that will probably be split up
 >into multiple User Stories once the Development team starts to dissect them. <br>

The Theme for the MVP vision defined above can be divided into the following Features: <br>

**Feature 1.** The user should be able to provide inputs and view locations to which he/she can potentially travel. <br>

**Feature 2.** For each country, the user should be able to view the score that indicates how safe the country is. <br>

**Feature 3.** The user should be able to view the overal ranking of the countries based on how safe it is to travel there. <br>

3. These Features can be further divided into **User Stories** as follows: <br>

**Feature 1** can be divided into the following user stories: <br>

**User Story 1.A.** As a user of the app, I want to be able to provide personal information to calculate the top safest locations, so that the resulting travel destinations will be customized to my background and circumstances. <br>
**User Story 1.B.** As a user of the app, I want to view top locations that do not have entry restrictions for me, so that I can rank and choose the travel destinations that are possible for me to travel. <br> 

**Feature 2** can be divided into the following user stories: <br>

**User Story 2.A.** As a user of the app, for each of the top ranked countries, I want to be able to view the score corresponding to each data category (e.g. for the country XX, view the score corresponding to the % of vaccinated population), so that I can rank the countries based on the COVID data metrics that are most important for me.<br>
**User Story 2.B.** As a user of the app, for each of the top ranked countries, I want to be able to view the total score i.e. sum of scores for all data categories, so that I can rank the countries based on all available COVID data metrics and look at the big picture.<br>

**Feature 3** can be divided into the following user stories: <br>

**Feature 3.** The user should be able to view the final ranking of the countries based on how safe it is to travel there. <br>
**User Story 3.A.** As a user of the app, I want to view the final list of top ranked travel locations and details for each location, so that I can learn more about the destinations that are most recommended by the app based on overall scores and my personal data. <br>
**User Story 3.B.** <br>


## Team Members

**Adam Ethan** - Junior at New York University studying Computer Science<br>
Github: [Adam Ethan](https://github.com/AdamEthan)

**Alifa Faruk** - Senior at New York University studying Computer Science<br>
Github: [Alifa Faruk](https://github.com/alifafaruk)

**Almazhan Kapan** - Senior at New York University studying Computer Science<br>
Github: [Almazhan Kapan](https://github.com/almazhankapan)

**Maya Sijaric** - Senior at New York University studying Computer Science<br>
Github: [Maya Sijaric](https://github.com/sijaric)

**Rajan Bharaj** - Senior at New York University studying Computer Science<br>
Github: [Rajan Bharaj](https://github.com/RajanBharaj)

**Roman Haberli** - Senior at New York University studying Computer Science<br>
Github: [Roman Haberli](https://github.com/rhaberli)


## History

>I was on a call with an old friend, who for fun had decided to create a website tracking live COVID vaccination 
> rates across the US. I asked him how readily available that data was and he said that the data is not hard to 
> find or to keep it updated. Days later, of my own accord, I was scrolling through [skyscanner](https://www.skyscanner.net/) 
> to dream about future holidays. I found that the COVID related information for
> every location was limited and really the only thing they provided was the travel requirements for flyers. 
> As the summer is approaching, millions of potential travelers are hoping to travel safely. 
> For people travelling with family, for people who are health conscious and for people 
> who just want to reduce the chance of infection, I decided to create COVID Travel Agent." 
> --Rajan

The success of the product is directly related to how well we can incorporate the data for as many travel destinations as possible. My team and I will provide users with as many travel destination options as possible, but unfortunately, we cannot collect and summarize the data from every known travel destination ourselves. As an open source project, we are looking for developers to submit accurate COVID data about any travel destinations not listed on our website. An index of current locations tracked and more information about contributing can be found at [CONTRIBUTING.md](./CONTRIBUTING.md).

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

If you are interested to view the data sources that power the app, you can visit <a href="https://ourworldindata.org/coronavirus" target="_blank">Our World in Data.</a>

