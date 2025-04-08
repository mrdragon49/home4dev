const appListcont = document.getElementById("appListcont");
let a = [];

try {
    let das = localStorage.getItem("s");
    let fnmasd = JSON.parse(das);
    a = fnmasd;
} catch (err) {
    console.log(err);
};
if (a == null) {
    let bf = [];

    a = [];
}

function setDatatosct(nm, lnk) {

    a.push({ name: nm, ln: lnk });
    let d = JSON.stringify(a);
    localStorage.setItem("s", d);
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Website saved successfully",
        showConfirmButton: false,
        timer: 1500
    });
};
function showDaa() {
    let dad = a;
    let datsdfsdf = `
     <a id="addAppslist">
                    <div class="mrappsbx">
                        <div class="mrappsimg">
                            <img src="data:image/png;base64,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">
                        </div>
                        <p>Add</p>
                    </div>
                </a>
                <a id="EditapplistBtn">
                    <div class="mrappsbx">
                        <div class="mrappsimg">
                            <img src="data:image/png;base64,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">
                        </div>
                        <p>Edit</p>
                    </div>
                </a>
    `;
    try {


        for (i = 0; i < dad.length; i++) {
            datsdfsdf += `
              <a href="${dad[i].ln}" target="_blank">
                        <div class="mrappsbx">
                            <div class="mrappsimg">
                                <img src="https://www.google.com/s2/favicons?domain=${dad[i].ln}">
                            </div>
                            <p>${dad[i].name}</p>
                        </div>
                    </a>
            `;
        };
    } catch (err) {
        console.log(err);
    }
    document.getElementById("mrappscontBx").innerHTML = datsdfsdf;
    document.getElementById("mrappscont").style.display = 'flex';
    dad = [];
    document.getElementById("EditapplistBtn").addEventListener("click", () => {  
        addAppsListedit();
    });
    document.getElementById("addAppslist").addEventListener("click", () => {
        addEditeform.style.display = "flex";
    });
};
showDaa();
document.getElementById("mrappscont").style.display = 'none';


document.addEventListener("keypress", (e) => {
    if (e.key == "q") {
        let fs = localStorage.getItem("s");
        JSON.parse(fs);

    }
});

document.getElementById("Svformdt").addEventListener("click", () => {
    let addEditipnn = document.getElementById("addEditipnn").value;
    let addEditipnu = document.getElementById("addEditipnu").value;
    if (addEditipnn == "" || addEditipnu == "") {
        alert("please fill the name and url");
    } else {
        if (addEditipnn.length > 4) {
            let a = "sadf";
            let asdf = addEditipnn.split("");
            let fnnam = "";
            for (i = 0; i < 4; i++) {
                fnnam += asdf[i];
            };
            addEditipnn = fnnam + "...";

        }
        let ssdf = addEditipnu.search("https://");
        let ssdfs = addEditipnu.search("http://");
        if (ssdf == 0 || ssdfs == 0) {

        } else {

            addEditipnu = "https://" + addEditipnu;
        }

        setDatatosct(addEditipnn, addEditipnu);
        showDaa();
    }
    document.getElementById("addEditipnn").value = "";
    document.getElementById("addEditipnu").value = "";
    document.getElementById("addEditeform").style.display = 'none';
});
function addAppsListedit() {

    document.getElementById("appListcont_nc").innerHTML = "";
    let dad = a;
    let lemed = ``;
    lemed += `<i id="closApplist" class="fa-solid fa-circle-xmark"></i>`;

    if (dad.length < 1) {
        lemed += `<h2>No Shortcuts</h2>`;
    } else {
        for (i = 0; i < dad.length; i++) {

            lemed += `
           <div class="appListcont_rw">
                    <p>1</p>
                    <div class="appListcont_icons">
                        <img src="https://www.google.com/s2/favicons?domain=${dad[i].ln}">
                    </div>
                    <div class="appListcont_nm">${dad[i].name}</div>
                    <div class="appListcont_actionbtns">
                         <button class="edfbtns"  name="${i}"><i class="fa-solid fa-pen-to-square"></i></button>

                         <button class="appList_dell" name="${i}"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                </div>
         `;

        }
    };
    appListcont.style.display = 'flex';
    document.getElementById("appListcont_nc").innerHTML += lemed;
    // console.log(lemed);
    dad = [];
    

    try {
        let dosdf = document.querySelectorAll(".edfbtns");
        dosdf.forEach(elsd => {
            elsd.addEventListener("click", () => {
                appList_ed(elsd.name);
            });
        });
        let delskd = document.querySelectorAll(".appList_dell");
        delskd.forEach(elsdd => {
            elsdd.addEventListener("click", () => {
                appList_dell(elsdd.name);
            });
        });

    } catch (error) {
        console.log(error);

        // location.reload();
    };
    document.getElementById("closApplist").addEventListener("click", () => {
        appListcont.style.display = 'none';
    });

};



function appList_dell(inds) {
    Swal.fire({
        title: "Are you sure?",
        text: "You will loos your site",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            let dad = a;
            dad.splice(inds, 1);
            let fndata = JSON.stringify(dad)
            localStorage.setItem("s", fndata);
            addAppsListedit();
            showDaa();
            dad = [];
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }

    });
    // location.reload();
};
function appList_ed(eidn) {
    let doesdsfsd = document.getElementById("indesnumS");
    doesdsfsd.value = eidn;
    document.getElementById("EaddEditipnn").value = a[eidn].name;
    document.getElementById("EaddEditipnu").value = a[eidn].ln;
    document.getElementById("EditFomts").style.display = "flex";
    appListcont.style.display = 'none';
};
document.getElementById("EhideaddEditeform").addEventListener("click", () => {
    document.getElementById("EditFomts").style.display = "none";
});
document.getElementById("svediteesd").addEventListener("click", () => {
    let sadfsdaf = document.getElementById("EaddEditipnn").value;
    let lkjasldf = document.getElementById("EaddEditipnu").value;
    let indesnumS = document.getElementById("indesnumS").value;
    if (sadfsdaf == "" || lkjasldf == "") {
        alert("please fill all fields");
    } else {
        let sdfsdaf = document.getElementById("EaddEditipnn").value;
        if (sdfsdaf.length > 4) {
            let asdf = sdfsdaf.split("");
            let fnnam = "";
            for (i = 0; i < 4; i++) {
                fnnam += asdf[i];
            };
            sdfsdaf = fnnam + "...";

        }
        a[indesnumS].name = sdfsdaf;
        a[indesnumS].ln = document.getElementById("EaddEditipnu").value;
        let fndata = JSON.stringify(a)
        localStorage.setItem("s", fndata);
        document.getElementById("EditFomts").style.display = "none";
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Website saved successfully",
            showConfirmButton: false,
            timer: 1500
        });
    }
});

