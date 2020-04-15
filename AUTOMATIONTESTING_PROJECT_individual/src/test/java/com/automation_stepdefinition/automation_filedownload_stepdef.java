package com.automation_stepdefinition;

import com.automation_pages.automation_filedownload_page;

import Seleniumutility.seleniumutil;
import baseclass.library;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class automation_filedownload_stepdef extends library
{
	automation_filedownload_page filedownload;
	seleniumutil util;
	@Given("^Open url in the browser$")
	public void open_url_in_the_browser() throws Throwable 
	{
		launchApp();
	}

	@When("^Automation site is opened$")
	public void automation_site_is_opened() throws Throwable 
	{
	    filedownload = new automation_filedownload_page(driver);
	    filedownload.demosite();
	}

	@Then("^Click on more and click filedownload$")
	public void click_on_more_and_click_filedownload() throws Throwable 
	{
	    filedownload = new automation_filedownload_page(driver);
	    filedownload.filedownload_attributes();
	}

	@Then("^download the file$")
	public void download_the_file() throws Throwable 
	{
	   filedownload = new automation_filedownload_page(driver);
	   filedownload.filedownload();
	   util = new seleniumutil(driver);
		util.takeSnapShot("C:\\Users\\majeti\\eclipse-workspace\\AUTOMATIONTESTING_PROJECT\\src\\test\\resources\\screenshots\\filedownload.png");
	   filedownload.quit();
	}
}
