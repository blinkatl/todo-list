//each project will be encapuslated in a project task card. project task cards
// will be appended into the project container. project tasks cards will consist
// of a header and task card container. ensure the add button's event listener are
// properly scoped to each correct container.

// i need functions to make a project task card. task card will have taskCardHeader
// and taskCardContainer
// function to append task card to dom.
// create add button 

export default class project {
    constructor(name) {
        this.name = name;
        this.createProjectCard = this.createProjectCard();
        this.appendProjectCard = this.appendProjectCard();
    }

    // Return name of project
    get returnName() {
        return this.name;
    }

    // Create project card that contains header and task card container
    createProjectCard() {

    }
}