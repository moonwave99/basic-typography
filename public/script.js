(() => {
    const root = document.documentElement;
    const fontSizeSlider = document.getElementById("fontSize");
    const toggle = document.getElementById("toggle");
    const output = document.querySelector("output");

    fontSizeSlider.addEventListener("change", (event) => {
        const newValue = `${event.target.value}px`;
        root.style.setProperty("--main-font-size", newValue);
        output.innerHTML = newValue;
    });

    toggle.addEventListener("change", () =>
        document.body.classList.toggle("grid")
    );
})();
