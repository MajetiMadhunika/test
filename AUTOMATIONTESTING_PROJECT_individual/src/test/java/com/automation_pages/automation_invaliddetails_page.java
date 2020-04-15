package com.automation_pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class automation_invaliddetails_page 
{
	WebDriver driver;
	
	public automation_invaliddetails_page(WebDriver driver)
	{
		this.driver=driver;
	}
	
	public void click_demosite() 
	{
		driver.findElement(By.xpath("//*[@id=\"menu-item-251\"]/a")).click();
	}
	public void invaliddetails_register()
	{
		driver.findElement(By.xpath("//*[@id=\"basicBootstrapForm\"]/div[1]/div[1]/input")).sendKeys("madhu");
		driver.findElement(By.xpath("//*[@id=\"basicBootstrapForm\"]/div[1]/div[2]/input")).sendKeys("majeti");
		driver.findElement(By.xpath("//*[@id=\"eid\"]/input")).sendKeys("madhu");
		driver.findElement(By.xpath("//*[@id=\"basicBootstrapForm\"]/div[4]/div/input")).sendKeys("0123456789");
		driver.findElement(By.xpath("//input[@value='FeMale']")).click();
		driver.findElement(By.xpath("//*[@id=\"countries\"]")).click();
		driver.findElement(By.xpath("//option[@value='India']")).click();
	}
	public void Submit()
	{
		driver.findElement(By.xpath("//*[@id=\"submitbtn\"]")).click();
	}
	
	public void quit() 
	{
		driver.close();
	}
}
