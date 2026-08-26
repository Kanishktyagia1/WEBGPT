alert("Workspace JS loaded");const editor = document.getElementById("codeEditor");
const preview = document.getElementById("preview");

const tabs = document.querySelectorAll(".editor-tab");

const code = {
    html: `
<h1>Hello WebGPTA1 🚀</h1>
<p>Your website is working!</p>
`,
    css: `
body {
    font-family: Arial;
    padding: 40px;
    text-align: center;
}

h1 {
    color: #6d28d9;
}
`,
    js: `
console.log("WebGPTA1 JavaScript is working!");
`
};

let currentLanguage = "html";


function updatePreview() {

    const html = code.html;

    const css = `<style>${code.css}</style>`;

    const js = `<script>${code.js}<\/script>`;

    preview.srcdoc = html + css + js;
}


function saveCurrentCode() {
    code[currentLanguage] = editor.value;
}


function loadCode(language) {

    currentLanguage = language;

    editor.value = code[language];

    tabs.forEach(tab => {

        tab.classList.toggle(
            "active",
            tab.dataset.language === language
        );

    });

    const placeholders = {
        html: "Write your HTML here...",
        css: "Write your CSS here...",
        js: "Write your JavaScript here..."
    };

    editor.placeholder = placeholders[language];
}


tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        saveCurrentCode();

        loadCode(tab.dataset.language);

        updatePreview();

    });

});


editor.addEventListener("input", () => {

    code[currentLanguage] = editor.value;

    updatePreview();

});


loadCode("html");
updatePreview();
