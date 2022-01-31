var fs = require('fs')

function saveData(favoritesList) {

    fs.readFile('results.json', function (err, data) {
        var json = JSON.parse(data)
        json.push(favoritesList);

        fs.writeFile("results.json", JSON.stringify(json));
    })
}
