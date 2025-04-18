import { StaticPopulator } from "./classes/utils/staticPopulator.js";
import { APIHub } from "./classes/apiHub.js";

// Populate statics on page
StaticPopulator.populateInnerHTML({
    "title": titleLabel,
    "letter-template": letterLabel,
    "job-description": jobDescriptionLabel,
    "submit": submitLabel,
    "generated-letter": generateLabel
});

// Handle click to submit
document.getElementById("submit").addEventListener("click", async (event) => {
    event.preventDefault();

    const template = document.getElementById("template").value;
    const description = document.getElementById("description").value;

    const generatedLetter = await APIHub.generateCoverLetter(JSON.stringify({
        template: template,
        description: description
    }));
    document.getElementById("generated").innerHTML = generatedLetter ? generatedLetter : serverError;
})