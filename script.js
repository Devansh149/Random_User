async function abc() {
    let blob = await fetch(`https://randomuser.me/api/`);
    var ans=await blob.json();
    let outer=document.createElement("div");
    outer.classList.add("outer");

    let img=document.createElement("img");
    img.src=ans.results[0].picture.medium;
    outer.appendChild(img);

    let name=document.createElement("h1");
    name.textContent=ans.results[0].name.first;
    outer.appendChild(name);

    let  gender=document.createElement("h2");
    gender.textContent=ans.results[0].gender;
    if(gender.textContent=="female"){
        gender.style.color="pink";
    }
    outer.appendChild(gender);
    
    let email=document.createElement("h3");
    email.textContent=ans.results[0].email;
    outer.appendChild(email);

    let button=document.createElement("button");
    button.textContent="ADD";
    outer.appendChild(button);
    document.body.appendChild(outer);
}
abc();