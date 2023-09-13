const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.google.com",

    
    projectId: "2je56j",

    "video" :false,//testler video kaydetmiyor
    
   // "retries" :2

    //test fail oldugunda kac kere daha calistirilmasini gerektigini belirtiyoruz
    //hata aldiginda 2 defa dene deemk




  },

 
  
});
