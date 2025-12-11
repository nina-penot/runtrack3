const mytable = document.getElementById("mytable");
const mybtn = document.getElementById("mybutton");

function clear_children(parent) {
    parent.innerHTML = "";
}

async function dataload() {
    const something = await fetch("./users.php");
    const mydata = await something.json();
    console.log(mydata);
    return mydata;
}

async function getinfo() {
    const mydata = await dataload();
    mybtn.addEventListener("click", (e) => {
        e.preventDefault();
        clear_children(mytable);
        for (n in mydata) {
            console.log(mydata[n]);
            newrow = mytable.insertRow(n);
            count = 0;
            for (c in mydata[n]) {
                console.log(c + ":" + mydata[n][c]);
                newcell = newrow.insertCell(count);
                newcell.textContent = mydata[n][c];
                count++
            }
        }
    })
}

getinfo();