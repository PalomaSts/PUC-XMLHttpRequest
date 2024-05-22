var row;
var cell;
var cellText;

function getMemes() {

    var maximo = 100;

    var i, arr = [];
    for (i = 0; i < maximo; i++) {
        arr[i] = i;
    }

    console.log(arr); 
    var p, n, tmp;
    for (p = arr.length; p;) {
        n = Math.random() * p-- | 0;
        tmp = arr[n];
        arr[n] = arr[p];
        arr[p] = tmp;
    }
    console.log(arr); 

    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://api.imgflip.com/get_memes");

    xhttp.onload = () => {
        const data = JSON.parse(xhttp.response);
        console.log(data);


        for (let i = 0; i < 100; i++) {
            let k = arr[i];
            console.log(k);
            row = document.createElement("tr");
            row.setAttribute("id", "itemCo");
            for (let j = 0; j < 5; j++) {
                cell = document.createElement("td");
                cellText;
                switch (j) {
                    case 0:
                        cellText = document.createElement("img");
                        cellText.setAttribute("src", `${data.data.memes[k].url}`);
                        cellText.setAttribute("width", "100");
                        cellText.setAttribute("height", "100");
                        break;
                    case 1:
                        cellText = document.createTextNode(`${data.data.memes[k].name}`);
                        break;
                    case 2:
                        cellText = document.createElement("a");
                        cellText.setAttribute("href", `${data.data.memes[k].url}`);
                        cellText.setAttribute("target", "_blank");
                        let textlink = document.createTextNode(`${data.data.memes[k].url}`);
                        cellText.appendChild(textlink);
                        break;
                    case 3:
                        cellText = document.createTextNode(`${data.data.memes[k].width}`);
                        break;
                    case 4:
                        cellText = document.createTextNode(`${data.data.memes[k].height}`);
                        break;
                }
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            document.getElementById("corpoTabela").appendChild(row);
        }
    };
    xhttp.send();
};

