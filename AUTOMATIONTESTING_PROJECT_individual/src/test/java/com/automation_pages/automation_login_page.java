package com.automation_pages;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class automation_login_page 
{
	WebDriver driver;
	
	public automation_login_page(WebDriver driver)
	{
		this.driver=driver;
	}
	public void automation_loginpage()
	{
		driver.findElement(By.linkText("My Account")).click();
	}
	//Enter username
	public void automation_username()
	{
		driver.findElement(By.id("username")).sendKeys("madhu@gmail.com");
	}
	
	//Enter password
	public void automation_password()
	{
		driver.findElement(By.id("password")).sendKeys("madhu@123");
	}
	public void click_loginbtn()
	{
		driver.findElement(By.name("login")).click();
	}
	public void quit() 
	{
		driver.close();
	}
}