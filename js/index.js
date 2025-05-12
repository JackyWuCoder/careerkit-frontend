import { StaticPopulator } from "./classes/utils/staticPopulator.js";
import { LoadingWrapper } from "./classes/utils/visualUtils.js";
import { APIHub } from "./classes/apiHub.js";

// Populate statics on page
StaticPopulator.populateInnerHTML({
    "site-name": siteName,
    "title": titleLabel,
    "title-description": titleDescriptionLabel,
    "letter-template": letterLabel,
    "job-description": jobDescriptionLabel,
    "submit": submitLabel,
    "generated-letter": generateLabel
});

const loader = new LoadingWrapper(
    document.getElementById("loading-icon"),
    document.getElementById("generated")
);

// Handle click to submit
document.getElementById("submit").addEventListener("click", async (event) => {
    event.preventDefault();
    loader.show();

    const template = document.getElementById("template").value;
    const description = document.getElementById("description").value;

    const generatedLetter = await APIHub.generateCoverLetter({
        template: template,
        jobDescription: description
    });
    document.getElementById("generated").value = generatedLetter ? generatedLetter : serverError;
    loader.hide();
})