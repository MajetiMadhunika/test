package com.automation_pages;

import java.io.File;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

public class automation_filedownload_page 
{
	WebDriver driver;
	automation_login_page login;
	
	public automation_filedownload_page(WebDriver driver)
	{
		this.driver=driver;
	}
	public void demosite()
	{
		driver.findElement(By.linkText("Demo Site")).click();
	}
	public void filedownload_attributes()
	{
		Actions act=new Actions(driver);
		WebElement more=driver.findElement(By.linkText("More"));
		WebElement fd=driver.findElement(By.xpath("//ul/li[9]/ul/li[3]/a"));
		act.moveToElement(more);
		act.moveToElement(fd).click().build().perform();
	}
	public void filedownload()
	{
		driver.findElement(By.xpath("//*[@id=\"textbox\"]")).sendKeys("Hi, I am Madhu");
		driver.findElement(By.xpath("//*[@id=\"createTxt\"]")).click();
		driver.findElement(By.xpath("//*[@id=\"link-to-download\"]")).click();
		File f=new File("C://Users//majeti//Downloads//");
		boolean b=f.exists();
		if(b) 
			System.out.println("file exists");
	}
	public void quit()
	{
		driver.close();
	}
}
