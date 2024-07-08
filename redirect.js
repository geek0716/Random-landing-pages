// This will be populated by GitHub Actions
const landingPages = [];

function redirectToRandomPage() {
    if (landingPages.length > 0) {
        const randomPage = landingPages[Math.floor(Math.random() * landingPages.length)];
        window.location.href = randomPage;
    }
}

window.onload = redirectToRandomPage;
