
import App from '/App.js';

function errorhandler(error) {
	console.error("Dynamic page doesn't esist", error)
}

function routeloader(route) {
	return (module) => route(null, module.customroute)
}

export customroute {
    component: App,
    newRoutes: [
    {
      path: 'FeaturedLocations',
      getComponent(location, route) {
        System.import('pages/FeaturedLocations')
          .then(routeLoader(route))
          .catch(errorhandler);
      }
    },
    {
      path: 'Top Locations',
      getComponent(location, cb) {
        System.import('pages/top_locations')
          .then(routeLoader(route))
          .catch(errorhandler);
      }
    },
    {
      path: 'Covid Info',
      getComponent(location, cb) {
        System.import('pages/covid_info')
          .then(routeLoader(route))
          .catch(errorhandler);
      }
    },
     {
      path: 'Sign In',
      getComponent(location, cb) {
        System.import('pages/SignIn')
          .then(routeLoader(route))
          .catch(errorhandler);
		
		}
	  }
  ]
	
};
		
	
