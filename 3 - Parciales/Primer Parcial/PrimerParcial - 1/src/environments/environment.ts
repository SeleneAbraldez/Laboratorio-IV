// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// conexcion con firebase
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDTRkmfP0IdPtbk1P6QgUcbQgQTCK_Vh_c",
    authDomain: "tarotutn.firebaseapp.com",
    databaseURL: "https://tarotutn.firebaseio.com",
    projectId: "tarotutn",
    storageBucket: "tarotutn.appspot.com",
    messagingSenderId: "456703134796",
    appId: "1:456703134796:web:00c39d5372fc3fceae78e9"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
