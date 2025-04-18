export { StaticPopulator }

class StaticPopulator {

    static populateInnerHTML(pairs) {
        Object.entries(pairs).forEach(pair => {
            const element = document.getElementById(pair[0]);
            element.innerHTML = pair[1];
        });
    }
}
