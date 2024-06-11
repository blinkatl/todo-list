// Create SVG icon for projects in sidebar
export default class sidebarProjectButtonIcon {
    constructor(width, height, color) {
        this.svgNS = "http://www.w3.org/2000/svg";
        this.svg = document.createElementNS(this.svgNS, "svg");
        this.svg.setAttribute("width", width);
        this.svg.setAttribute("height", height);
        this.svg.setAttribute("viewBox", "0 0 24 24");
        this.svg.setAttribute("stroke-width", "1.5");
        this.svg.setAttribute("fill", "none");
        this.svg.setAttribute("color", color);

        // Create paths
        this.createPaths(color);
    }

    createPaths(color) {
        this.addPath("M20 4V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4Z", color);
        this.addPath("M20 5L14 10", color);
        this.addPath("M20 9L12.5 15", color);
    }

    addPath(d, strokeColor) {
        const path = document.createElementNS(this.svgNS, "path");
        path.setAttribute("d", d);
        path.setAttribute("stroke", strokeColor);
        path.setAttribute("stroke-width", "1.5");
        path.setAttribute("stroke-linecap", "round");
        path.setAttribute("stroke-linejoin", "round");
        this.svg.appendChild(path);
    }

    getSVG() {
        return this.svg;
    }
}

// Create plus icon for "add task" button in add task card
export function createAddIcon({ width = '24px', height = '24px', color = '#000000', strokeWidth = 1.5 } = {}) {
    const svgNamespace = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNamespace, 'svg');
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);
    svg.setAttribute('stroke-width', strokeWidth);
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('xmlns', svgNamespace);
    svg.setAttribute('color', color);

    const path = document.createElementNS(svgNamespace, 'path');
    path.setAttribute('d', 'M6 12H12M18 12H12M12 12V6M12 12V18');
    path.setAttribute('stroke', color);
    path.setAttribute('stroke-width', strokeWidth);
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');

    svg.appendChild(path);
    return svg;
}