var mongoose = require("mongoose")
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {name: "Cloud's Rest", 
     image: "http://static2.bigstockphoto.com/thumbs/3/2/1/large1500/123147734.jpg",
     description: "Lorem ipsum dolor sit amet, mei ei munere gubergren, ne vix vidit elaboraret. Idque ubique in eum. Sit detraxit efficiantur in. Duo ut nisl meis. Nisl tollit similique pro eu, pri dico idque et. Verterem phaedrum ex qui, pri tincidunt expetendis ad, patrioque expetendis voluptatum in qui. Vel veritus probatus atomorum ad, id quando feugait has."
    },
    {name: "Beach Mesa", 
     image: "https://ak6.picdn.net/shutterstock/videos/26300390/thumb/1.jpg",
     description: "Lorem ipsum dolor sit amet, mei ei munere gubergren, ne vix vidit elaboraret. Idque ubique in eum. Sit detraxit efficiantur in. Duo ut nisl meis. Nisl tollit similique pro eu, pri dico idque et. Verterem phaedrum ex qui, pri tincidunt expetendis ad, patrioque expetendis voluptatum in qui. Vel veritus probatus atomorum ad, id quando feugait has."
    },
    {name: "Canyon Floor", 
     image: "http://l7.alamy.com/zooms/b12b0bb713274f199dc4f6a2c72de6b1/camping-tent-at-the-lakeside-with-a-mountain-in-the-background-helen-bm0nye.jpg",
     description: "Lorem ipsum dolor sit amet, mei ei munere gubergren, ne vix vidit elaboraret. Idque ubique in eum. Sit detraxit efficiantur in. Duo ut nisl meis. Nisl tollit similique pro eu, pri dico idque et. Verterem phaedrum ex qui, pri tincidunt expetendis ad, patrioque expetendis voluptatum in qui. Vel veritus probatus atomorum ad, id quando feugait has."
    }
];

function seedDB(){
    // remove all campgrounds
    Campground.remove({}, function(err){
     if(err){
        console.log(err);
    } else{
        console.log("removed campgrounds");
        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else{
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                        text: "This place is great, but I wish there was internet",
                        author: "Homer Simpson"   
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else{
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }
    });
    
}


module.exports = seedDB;