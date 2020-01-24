const axios = require("axios");
const cheerio = require("cheerio")
var id = 1;



axios.get("https://www.bandsintown.com/").then(response => {
 
      const $ = cheerio.load(response.data);
     
      
        $(".event-0fe45b3b").each(function(i, element) {
        
            
            
            var artist= $(element).find(".event-5daafce9").text();
            var venue=  $(element).find(".event-6891d84c").text();
            var location=  $(element).find(".event-c5863c62").text();
            var date=  $(element).find(".event-02e85563").text();
            var Artist = ({
                artist: artist,
                venue: venue,
                location: location,
                date: date,
                id: id++
       });
       console.log(Artist);
       
    });{
        
     }
     
      
 
  
});

//eventList-5e5f25ca the event
////event-0fe45b3b event container

//////event-49d18d61 thumbnail
////////<img>

//////event-02e85563 date
////////event-ad736269 MONTH
////////event-d7a00339 DAY

//////event-5daafce9
////////<H2> Artist Name

//////event-a7d492f7
////////event-6891d84c venue
////////event-c5863c62 city