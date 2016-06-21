import angular from 'angular';

// services
import UserSrv from './user.service';

// import the jwt service
import JwtService from './jwt.service'

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

// attach the User service to the services module
servicesModule.service('User', UserSrv)
              .service('JWT', JwtService);


export default servicesModule;