export class WishItem {
    constructor(
        public wishText : string,
        public isFulfilled : boolean = false
    ) {}

    toggle() {
        this.isFulfilled = !this.isFulfilled;
    }
}
