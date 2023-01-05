const inputField=document.querySelector("#textbox");
const copyBtn=document.querySelector("#copy");

const copytext = (e) => {
    e.preventDefault();

    inputField.select()
    inputField.setSelectionRange(0,9999);
    document.execCommand("copy");

    copyBtn.textContent="copied!!"
    setTimeout(()=>{
        copyBtn.textContent="copy"
    },3000)
}
copyBtn.addEventListener('click',copytext)