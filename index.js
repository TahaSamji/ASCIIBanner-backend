const express = require('express');
const app = express();
var figlet = require("figlet");
const cors = require("cors");
const e = require('express');
const port = 8000
app.use(cors());
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