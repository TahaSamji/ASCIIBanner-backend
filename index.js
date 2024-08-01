const express = require('express');
const app = express();
var figlet = require("figlet");
const cors = require("cors");
const port = 8000

const corsOptions = {
  // origin: "https://ascii-banner.vercel.app",
  origin: "http://localhost:3000",
  
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}
let items = [
  "Alpha", "1Row", "3x5", "AMC 3 Liv1", "AMC Tubes", "Wow", "Trek", "Ticks", 
  "Ticks Slant", "Test1", "Tengwar", "Stellar", "Star Strips", "Small Tengwar", 
  "Small Poison", "Slide", "S Blood", "Runyc", "Runic", "Rotated", "Rot13", 
  "Reverse", "Relief", "Relief2", "Poison", "Peaks", "Peaks Slant", 
  "Patorjk-HeX", "OS2", "Octal", "Nipples", "Mshebrew210", "Moscow", 
  "Morse2", "Mike", "Merlin2", "Marquee", "Lockergnome", "Linux", "Lean", 
  "LCD", "Konto", "Konto Slant", "Knob", "Katakana", "Jerusalem", "Hieroglyphs", 
  "Hex", "Gradient", "Goofy", "Flipped", "Filter", "Efti Wall", "Efti Piti", 
  "Efti Chess", "Doh", "Def Leppard", "Decimal", "DANC4", "Cola", "Binary", 
  "Bear", "B1FF", "AMC Untitled", "AMC Slash", "AMC Razor2", "AMC Neko","Benjamin","Barbwire","Basic","Block","Braced","Bright","Caligraphy"
  ,"Caligraphy2","Computer","Contrast","Cosmike","Fraktur","JS Cursive","Morse","Rammstein","Tsalagi","USA Flag","Alphabet"
];

app.use(cors(corsOptions));
app.use(express.json());

app.post('/convertText', (req, res) => {
  
  try {
    
    const {text,font,horizontallayout,verticallayout
    ,width,whitespaceBreak} = req.body.textOptions;

   
 console.log(req.body.textOptions);
  figlet.text(
    text,
        {
          font: font,
          horizontalLayout:horizontallayout,
          verticalLayout: verticallayout,
          width: width,
          whitespaceBreak
          
          
        },
        function (err, data) {
          if (err) {
            console.log("Something went wrong...");
            console.dir(err);
            return;
          }
          
        return  res.json({data});
        }
      );
  } catch (error) {
    
  }
})

app.get('/', (req, res) => {
  try {
   
    figlet.fonts(function (err, fonts) {
      if (err) {
        console.log("something went wrong...");
        console.dir(err);
        return;
      } 
      fonts = fonts.filter(font => !items.includes(font));
    return res.json({data:fonts})
    });
  } catch (error) {
    console.error(error);
  }
             
      });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})