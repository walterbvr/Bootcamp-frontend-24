class Seat {
    #isAvailable;

    constructor() {
        this.#isAvailable = true;
    }

    isAvailable() {
        return this.#isAvailable;
    }

    reserve() {
        this.#isAvailable = false;
    }

    toString() {
        return this.#isAvailable ? "O" : "X";
    }
}

class Cinema {
    constructor(columns, rows) {
        this.columns = columns;
        this.rows = rows;
        this.seats = [];

        for (let i = 0; i < rows; i++) {
            this.seats[i] = [];
            for (let j = 0; j < columns; j++) {
                this.seats[i][j] = new Seat();
            }
        }
    }

    reserve(column, row) {
        if (row >= 0 && row < this.rows && column >= 0 && column < this.columns) {
            if (this.seats[row][column].isAvailable()) {
                this.seats[row][column].reserve();
                console.log(`Seat ${column}:${row} reserved.`);
            } else {
                console.log(`Seat ${column}:${row} is already taken.`);
            }
        } else {
            console.log(`Seat ${column}:${row} is out of bounds.`);
        }
    }

    showCine() {
        let cinemaString = '';
        console.log('Cinema Layout:');
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                cinemaString += `${i}:${j} ${this.seats[i][j]}`;
                if (j < this.columns - 1) {
                    cinemaString += " | ";
                }
            }
            cinemaString += "\n";
        }
        console.log(cinemaString);
    }
}

const cinema = new Cinema(5, 5);

cinema.reserve(2, 2);
cinema.showCine();
cinema.reserve(2, 2);
cinema.showCine();
