const express = require("express");
const app = express();
app.use(express.static("public"));//may couse problems

app.get("/", (req,res)=> {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/roster", (req, res)=> {
    const roster = [];
    roster[0]= {
        name:"Juju McDowell",
        year:"Junior",
        position: "RB",
        number:"0",
        schools: ["SouthCarolina Gamecocks"],
        img: "/players/jujum.jpg"
    };
    roster[1]= {
        name:"Debo Williams",
        year:"RS Junior",
        position:"LB",
        number:"0",
        schools: ["SouthCarolina Gamecocks"],
        img:"/players/debow.jpg"
    };
    roster[2]= {
        name:"Trey Knox",
        year:"Graduate",
        position:"TE",
        number:"1",
        schools: ["Arkansas Razorbacks","SouthCarolina Gamecocks"],
        img:"/players/treyk.jpg"
    };
    roster[3]={
        name:"DQ Smith",
        year:"Sophmore",
        position:"DB",
        number:"1",
        schools: ["SouthCarolina Gamecocks"],
        img:"/players/dqs.jpg"
    }
    roster[4] = {
        name:"O'Donnell Fortune",
        year:"RS Junior",
        position:"DB",
        number:"3",
        schools: ["SouthCarolina Gamecocks"],
        img:"/players/odonf.jpg"
    }
    roster[5] = {
        name:"Antwane Wells Jr.",
        year:"Senior",
        position:"WR",
        number:"3",
        schools: ["James Madison Dukes","SouthCarolina Gamecocks"],
        img:"/players/antwanew.jpg"
    }

    res.json(roster);

});

app.listen(3000,()=> {
    console.log("listening");
})