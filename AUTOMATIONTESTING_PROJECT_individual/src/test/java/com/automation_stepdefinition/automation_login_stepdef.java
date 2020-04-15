package com.automation_stepdefinition;

import com.automation_pages.automation_login_page;

import baseclass.library;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class automation_login_stepdef extends library
{
	automation_login_page login;
	@Given("^Launch the browser and enter url$")
	public void launch_the_browser_and_enter_url() throws Throwable 
	{
		launchApp();
	}

	@When("^opened the login page$")
	public void opened_the_login_page() throws Throwable 
	{
		login = new automation_login_page(driver);
		login.automation_loginpage();
	}

	@Then("^Enter the username and password$")
	public void enter_the_username_and_password() throws Throwable 
	{
		login = new automation_login_page(driver);
		login.automation_username();
		login.automation_password();
	}
	@Then("^Click the login button$")
	public void click_the_login_button() throws Throwable 
	{
		login = new automation_login_page(driver);
		login.click_loginbtn();
		login.quit();
	}	
}
