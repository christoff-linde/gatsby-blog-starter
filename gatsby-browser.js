// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

export const registerServiceWorker = () => true

export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(`This application has been updated. ` + `Reload to display the latest version?`);

    if (answer === true) {
        window.location.reload();
    }
}
