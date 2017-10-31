export class Task {
    title: string;
    status: Status;

    constructor(title: string) {
        this.title = title;
        this.status = Status.NEW;
    }
}

export enum Status {
    NEW, PENDING, DONE
}
