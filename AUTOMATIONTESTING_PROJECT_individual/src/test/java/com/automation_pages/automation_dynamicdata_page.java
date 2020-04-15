package com.automation_pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

public class automation_dynamicdata_page 
{
	WebDriver driver;
	automation_login_page login;
	
	public automation_dynamicdata_page(WebDriver driver)
	{
		this.driver=driver;
	}
	public void demosite()
	{
		driver.findElement(By.linkText("Demo Site")).click();
	}
	public void dynamicdata_attributes()
	{
		Actions act=new Actions(driver);
		WebElement more=driver.findElement(By.linkText("More"));
		WebElement dd=driver.findElement(By.xpath("//*[@id=\"header\"]/nav/div/div[2]/ul/li[9]/ul/li[2]/a"));
		act.moveToElement(more);
		act.moveToElement(dd).click().build().perform();
	}
	public void dynamicdata()
	{
		driver.findElement(By.xpath("//*[@id=\"save\"]")).click();
	}
	public void quit() 
	{
		driver.close();
	}

}
