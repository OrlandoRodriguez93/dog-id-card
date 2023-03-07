$( document ).ready( function() {
    getLauraAge();
} )

function getLauraAge() 
{
    let laura_born = "2018/12/16";  
    var mdate = laura_born;  
    var dobYear = parseInt(mdate.substring(0,4), 10);  
    var dobMonth = parseInt(mdate.substring(5,7), 10);  
    var dobDate = parseInt(mdate.substring(8,10), 10);  
      
    //get the current date from system  
    var today = new Date();  
    //date string after broking  
    var birthday = new Date(dobYear, dobMonth-1, dobDate);  
      
    //calculate the difference of dates  
    var diffInMillisecond = today.valueOf() - birthday.valueOf();  
  
    //convert the difference in milliseconds and store in day and year variable          
    var year_age = Math.floor(diffInMillisecond / 31536000000);  
    var day_age = Math.floor((diffInMillisecond % 31536000000) / 86400000);  
          
    var month_age = Math.floor(day_age/30);          
    day_ageday_age = day_age % 30;  
        
    var tMnt= (month_age + (year_age*12));  
    var tDays =(tMnt*30) + day_age;  
        
    
    $("#laura-age").html(year_age + " años " + month_age + " meses");
    
}