/*
*Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.
*/

function domainName(url){
  return url.includes("//") ? 
    url.includes("www") ? url.split(".")[1].split(".")[0] : url.split("//")[1].split(".")[0] : 
    url.includes("www") ?  url.split(".")[1] : url.split(".")[0];
}

domainName("http://google.com"); // Response "google"
domainName("http://google.co.jp") // Response "google"
domainName("www.xakep.ru") // Response "xakep"
domainName("https://youtube.com") // Response "youtube"
