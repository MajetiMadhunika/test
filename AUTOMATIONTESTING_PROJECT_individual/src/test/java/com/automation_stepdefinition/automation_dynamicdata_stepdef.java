package com.automation_stepdefinition;

import com.automation_pages.automation_dynamicdata_page;
import Seleniumutility.seleniumutil;
import baseclass.library;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class automation_dynamicdata_stepdef extends library
{
	automation_dynamicdata_page dynamicdata;
	seleniumutil util;
	@Given("^Open the url in the browser$")
	public void open_the_url_in_the_browser() throws Throwable 
	{
	   launchApp();
	}
	
	@When("^Automation site is opened and click demosite$")
	public void automation_site_is_opened_and_click_demosite() throws Throwable 
	{
		dynamicdata = new automation_dynamicdata_page(driver);
		dynamicdata.demosite();
	}

	@Then("^Click on more and click dynamic data$")
	public void click_on_more_and_click_dynamic_data() throws Throwable 
	{
		dynamicdata = new automation_dynamicdata_page(driver);
		dynamicdata.dynamicdata_attributes();
	}

	@Then("^Click on Dynamic data and get the data$")
	public void click_on_Dynamic_data_and_get_the_data() throws Throwable 
	{
		dynamicdata = new automation_dynamicdata_page(driver);
		dynamicdata.dynamicdata();
		util = new seleniumutil(driver);
		util.takeSnapShot("C:\\Users\\majeti\\eclipse-workspace\\AUTOMATIONTESTING_PROJECT\\src\\test\\resources\\screenshots\\dynamicdata.png");
		dynamicdata.quit();
	}

}
