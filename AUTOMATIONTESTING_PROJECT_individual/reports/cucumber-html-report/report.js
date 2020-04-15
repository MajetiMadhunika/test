$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/testcase.feature");
formatter.feature({
  "line": 1,
  "name": "Automationtesting Website",
  "description": "",
  "id": "automationtesting-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Register the website",
  "description": "",
  "id": "automationtesting-website;register-the-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tc_01_register"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Launch the browser and enter the url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Register page is opened",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enter the \"\u003cemailid\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click the register button",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "automationtesting-website;register-the-website;",
  "rows": [
    {
      "cells": [
        "emailid",
        "",
        "password"
      ],
      "line": 11,
      "id": "automationtesting-website;register-the-website;;1"
    },
    {
      "cells": [
        "madhu@gmail.com",
        "",
        "madhu@123"
      ],
      "line": 12,
      "id": "automationtesting-website;register-the-website;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Register the website",
  "description": "",
  "id": "automationtesting-website;register-the-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tc_01_register"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Launch the browser and enter the url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Register page is opened",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enter the \"madhu@gmail.com\" and \"madhu@123\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click the register button",
  "keyword": "And "
});
formatter.match({
  "location": "automation_register_stepdef.launch_the_browser_and_enter_the_url()"
});
formatter.result({
  "duration": 16508177300,
  "status": "passed"
});
formatter.match({
  "location": "automation_register_stepdef.register_page_is_opened()"
});
formatter.result({
  "duration": 837471300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "madhu@gmail.com",
      "offset": 11
    },
    {
      "val": "madhu@123",
      "offset": 33
    }
  ],
  "location": "automation_register_stepdef.enter_the_and(String,String)"
});
formatter.result({
  "duration": 623365100,
  "status": "passed"
});
formatter.match({
  "location": "automation_register_stepdef.click_the_register_button()"
});
formatter.result({
  "duration": 5377396500,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Validate the login fuctionality",
  "description": "",
  "id": "automationtesting-website;validate-the-login-fuctionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@tc_02_login"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Launch the browser and enter url",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "opened the login page",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Enter the username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "automation_login_stepdef.launch_the_browser_and_enter_url()"
});
formatter.result({
  "duration": 14952173300,
  "status": "passed"
});
formatter.match({
  "location": "automation_login_stepdef.opened_the_login_page()"
});
formatter.result({
  "duration": 1064656100,
  "status": "passed"
});
formatter.match({
  "location": "automation_login_stepdef.enter_the_username_and_password()"
});
formatter.result({
  "duration": 1059371900,
  "status": "passed"
});
formatter.match({
  "location": "automation_login_stepdef.click_the_login_button()"
});
formatter.result({
  "duration": 6257891900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "To register the demosite giving Invalid details",
  "description": "",
  "id": "automationtesting-website;to-register-the-demosite-giving-invalid-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@tc_03_Demosite_UserRegister"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "the user launch the browser and url",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "opens the Practice automation website and click_the Demo site button",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "enter invalid details",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "click on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "automation_invaliddetails_stepdef.the_user_launch_the_browser_and_url()"
});
formatter.result({
  "duration": 13865169400,
  "status": "passed"
});
formatter.match({
  "location": "automation_invaliddetails_stepdef.opens_the_Practice_automation_website_and_click_the_Demo_site_button()"
});
formatter.result({
  "duration": 4347414300,
  "status": "passed"
});
formatter.match({
  "location": "automation_invaliddetails_stepdef.enter_invalid_details()"
});
formatter.result({
  "duration": 873839400,
  "status": "passed"
});
formatter.match({
  "location": "automation_invaliddetails_stepdef.click_on_submit_button()"
});
formatter.result({
  "duration": 1016899400,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Download the file in the demosite-Filedownload",
  "description": "",
  "id": "automationtesting-website;download-the-file-in-the-demosite-filedownload",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@tc_04_Demosite_filedownload"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "Open url in the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "Automation site is opened",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Click on more and click filedownload",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "download the file",
  "keyword": "Then "
});
formatter.match({
  "location": "automation_filedownload_stepdef.open_url_in_the_browser()"
});
formatter.result({
  "duration": 14674546800,
  "status": "passed"
});
formatter.match({
  "location": "automation_filedownload_stepdef.automation_site_is_opened()"
});
formatter.result({
  "duration": 3984879000,
  "status": "passed"
});
formatter.match({
  "location": "automation_filedownload_stepdef.click_on_more_and_click_filedownload()"
});
formatter.result({
  "duration": 981302600,
  "status": "passed"
});
formatter.match({
  "location": "automation_filedownload_stepdef.download_the_file()"
});
formatter.result({
  "duration": 1685698700,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Get the dynamic data in the demosite-DynamicData",
  "description": "",
  "id": "automationtesting-website;get-the-dynamic-data-in-the-demosite-dynamicdata",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@tc_05_Demosite_Dynamicdata"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "Open the url in the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "Automation site is opened and click demosite",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Click on more and click dynamic data",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Click on Dynamic data and get the data",
  "keyword": "Then "
});
formatter.match({
  "location": "automation_dynamicdata_stepdef.open_the_url_in_the_browser()"
});
formatter.result({
  "duration": 12848487400,
  "status": "passed"
});
formatter.match({
  "location": "automation_dynamicdata_stepdef.automation_site_is_opened_and_click_demosite()"
});
formatter.result({
  "duration": 3501863500,
  "status": "passed"
});
formatter.match({
  "location": "automation_dynamicdata_stepdef.click_on_more_and_click_dynamic_data()"
});
formatter.result({
  "duration": 942807300,
  "status": "passed"
});
formatter.match({
  "location": "automation_dynamicdata_stepdef.click_on_Dynamic_data_and_get_the_data()"
});
formatter.result({
  "duration": 871306400,
  "status": "passed"
});
});