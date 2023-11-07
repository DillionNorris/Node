const showRoster = async () =>{
    const rosterJSON = await getJSON();
    if (rosterJSON ==""){
        return;
    }
    
    
    let rosterDiv = document.getElementById('roster-List');

    rosterJSON.forEach((player) => {
        let section = document.createElement('section');
        rosterDiv.append(section);

        let name = document.createElement('h3');
        section.append(name);
        name.innerHTML= player.name;

        let img = document.createElement('img');
        section.append(img);
        img.src="http://localhost:3000"+player.img

        let ul = document.createElement('ul');
        section.append(ul);

        let year = document.createElement('li');
        year.innerHTML = player.year;
        ul.append(year);

        let position = document.createElement('li');
        position.innerHTML = player.position;
        ul.append(position);

        let number = document.createElement('li');
        number.innerHTML = player.number;
        ul.append(number);

        let schools = document.createElement('li');
        schools.innerHTML = player.schools;
        ul.append(schools);







    });

}

const getJSON = async () => {
    try{
        let response = await fetch('http://localhost:3000/api/roster');
        return await response.json();
    }catch (error) {
        console.log("error fetching json");
        return;
    }
}



window.onload = () =>{
    showRoster();
}