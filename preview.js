const preview = document.getElementById("websitePreview");
const backBtn = document.getElementById("backBtn");

const savedProject = localStorage.getItem("webgpta1_project");

if (savedProject) {

    const code = JSON.parse(savedProject);

    const html = code.html || "";
    const css = `<style>${code.css || ""}</style>`;
    const js = `<script>${code.js || ""}<\/script>`;

    preview.srcdoc = html + css + js;

} else {

    preview.srcdoc = `
        <h2 style="font-family:Arial;text-align:center;margin-top:50px">
            No website generated yet.
        </h2>
    `;
}

backBtn.addEventListener("click", () => {
    window.location.href = "workspace.html";
});
