const cron = require("node-cron");
const algorithm = require("./algorithm.js");

let unsorted_data = {};
let sorted_data = {};
let overall_selected = true;
let cases_selected = false;
let vaccination_selected = false;
let mortality_selected = false;
let price_selected = false;

function sortBy () {
    unsorted_data = algorithm.algorithm();

    for (var country in unsorted_data) {
        if (overall_selected) {

        }
        else if (cases_selected) {

        }
        else if (vaccination_selected) {

        }
        else if (mortality_selected) {

        }
        else if (price_selected) {

        }

    }

    return sorted_data;
}

module.exports = {
    sortBy: sortBy
}