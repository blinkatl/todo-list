export default class project {
    constructor(projectName) {
        this.projectName = projectName;
    }

    //Return projectName
    get returnProjectName() {
        return this.projectName;
    }
}