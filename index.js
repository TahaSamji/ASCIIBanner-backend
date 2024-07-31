const express = require('express');
const app = express();
var figlet = require("figlet");
const cors = require("cors");
const port = 8000

const corsOptions = {
  origin: "http://localhost:3000", // Allow requests from this origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow these methods
  allowedHeaders: ["Content-Type"]
}

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
    return res.json({data:fonts})
    });
  } catch (error) {
    console.error(error);
  }
             
      });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})