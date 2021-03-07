## Product Vision Statement

COVID Travel Agent aims to provide prospective travelers with all the information they need to make an informed decision about international travel during the COVID pandemic. Our target market is any traveler, family or individual wanting to know where they can travel, how safe each possible desitnation is and what is required to travel there. It is a one stop shop to make flight booking as simple as finding a destination, reading over COVID related data and travel requirements and booking a flight. Our aim is to take any COVID research a traveler may need to do off their hands and integrate it directly into our website. 

As such, our target market is NOT: any traveler, who for business, family or leisure intends to travel to a single specific location. 

Our aim is to provide users with a comprehensive list of viable travel locations, personalised for them based on information they provide, so that they can find a suitable travel location. Every location we provide comes complete with an overall safety score and individual rankings among various COVID related data categories. This way the user can identify what is most important to them and find the best locations with ease. Additionally, as travel restrcitions will undoubtebly change over the coming months, as will COVID data, a user can opt in to recieve email updates about new travel destinations available to them and updated ranking as information changes.

#### Minimum Viable Product

In order to provide the user with this information, we will need to track a variety of COVID data for each location, specifically: 

- % of general population vaccinated
- COVID cases at destination
- Quarantine periods 
- Mortality risk
- Requirements for travel
- Flight cost

We will also be tracking all COVID travel restrictions worldwide. I did not include this as a data point due to its binary nature. Travel restrictions will affect which locations users see based on their location and citizenship. After excluding all locations unavailable to the user, the remaining locations will be ranked and sorted for each category and locations will be recommended on an 'Overall' score based on a points total of their respective rankings in each category. The user will also be able to sort destinations based on individual categories, so that they can focus on what's most important to them. 

Data tracked will be live so that users will consistenly see accurate and up to date information. Therefore recommendations will change as rankings change as new data becomes available. We will need a large database to store all this information, coupled with a program that will scrape live data and update our database.

Additionally, we will need to build decision engine that can be fed live data from the database and output travel reccomendations for each user (based on travel restrictions, COVID data category rankings and 'Overall score').

The usability and completeness of our product is largely based on the range of locations we are able to offer to our users. As such, I am setting our M.V.P. for 60 locations (roughly 10 per continent), with a goal of 120 locations (roughy 20 per continent). I do not aim to split our target location numbers evenly between continents due to the nature of locations and availability of data in each. For example, Oceania may not have 10/20 locations that track all the necessary COVID information. 

## Team Members

**Adam Ethan** - junior at New York University studying Computer Science<br>
Github:  <a href="https://github.com/AdamEthan" target="_blank">AdamEthan</a>

**Alifa Faruk** - senior at New York University studying Computer Science<br>
Github:  <a href="https://github.com/alifafaruk" target="_blank">alifafaruk</a>

**Almazhan Kapan** - senior at New York University studying Computer Science<br>
Github:  <a href="https://github.com/almazhankapan" target="_blank">almazhankapan</a>

**Maya Sijaric** - senior at New York University studying Computer Science<br>
Github:  <a href="https://github.com/sijaric" target="_blank">sijaric</a>

**Rajan Bharaj** - senior at New York University studying Computer Science<br>
Github:  <a href="https://github.com/RajanBharaj/" target="_blank">RajanBharaj</a>

**Roman Haberli** - senior at New York University studying Computer Science<br>
Github:  <a href="https://github.com/rhaberli/" target="_blank">RajanBharaj</a>


## History

"I was on a call with an old friend, who for fun had decided to create a website tracking live covid vaccinations across the US. I asked him how readily available that data was and he said it's not hard to find or to stay updated. Days later, of my own accord, I was scrolling through skyscanner to dream about future holidays. I found that the information provided about COVID was very limited and really the only thing they did provide you with was requirements for flights. As summer is coming, millions of waiting holday makers are hoping they might be able to travel safely. For people who may be taking family, for people who are health concious, or for people who just want to reduce the chance of infection, I decided to create COVID Travel Agent." (Rajan)

The success of the product is directly related to the summation of data about as many travel destinations as possible. My team and I are hard at work trying to provide users with as many options as possible, but unfortunately, we cannot summate data from every known travel destination ourselves. As an open source project, we are looking for developers to submit accurate COVID data about any travel destinations not listed on our website. An index of current locations tracked and more information about contributing can be found at [CONTRIBUTING.md](./CONTRIBUTING.md).

## How to contribute? 
Thank you for your interest! To contribute to the project, please review the [CONTRIBUTING.md](./README.md) file. 

## Instructions for building and testing the project

For building the project, install the following software: <br>
<a href="https://git-scm.com/" target="_blank">Git</a><br>

<a href="https://nodejs.org/" target="_blank">Node.js</a><br>

<a href="https://reactjs.org/" target="_blank">React.js</a><br>

## Additional resources

If you are interested to view the data sources that power the app, you can visit <a href="https://ourworldindata.org/coronavirus" target="_blank">Our World in Data</a><br>
