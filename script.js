function adapt() {
    const SMALL_BREAKPOINT = 800;
    const LARGE_BREAKPOINT = 1200;
    
    let viewportWidth = innerWidth;

    let heading = document.getElementById("heading");

    if (viewportWidth < SMALL_BREAKPOINT) {
        heading.className = "title-small";
        console.log("Smartphone");
    } else if (viewportWidth >= SMALL_BREAKPOINT && viewportWidth < LARGE_BREAKPOINT) {
        heading.className = "title-medium";
        console.log("Tablet");
    } else {
        heading.className = "title-large";
        console.log("Desktop");
    }
}