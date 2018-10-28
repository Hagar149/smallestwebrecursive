$(document).ready(function(){
    var theCobWeb = {
        biggestWeb: {
            item: "comb",
            biggerWeb: {
                items: ["glasses", "paperclip", "bubblegum"],
                smallerWeb: {
                    item: "toothbrush",
                    tinyWeb: {
                        items: ["toenails", "lint", "wrapper", "homework"]
                    }
                }
            },
            otherBigWeb: {
                item: "headphones"
            },

        }
    };
    function findItem() {
        for (var property in theCobWeb) {
          if(theCobWeb.hasOwnProperty(property)){
            if(typeof theCobWeb[property] == "object"){
              console.log(theCobWeb[property]);
            } 
          }
        }
      }
  
      findItem();

});