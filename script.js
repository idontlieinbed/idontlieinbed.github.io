document.getElementById("introduceButton").addEventListener("click", () => {
    const info = document.getElementById("info");
    info.classList.remove("hidden");
});

document.getElementById("educationButton").addEventListener("click", () => {
    showDetails("學歷資訊：XXXX 大學，主修 XXXX，畢業於 XXXX 年。");
});

document.getElementById("experienceButton").addEventListener("click", () => {
    showDetails("工作經歷：曾在 XXXX 公司擔任 XXXX 職位，負責 XXXX 工作。");
});

document.getElementById("skillsButton").addEventListener("click", () => {
    showDetails("專長：精通程式設計 (JavaScript、Python)，熟悉網站開發與設計。");
});

function showDetails(content) {
    const details = document.getElementById("details");
    details.textContent = content;
    details.classList.remove("hidden");
}
