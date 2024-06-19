const checkAvailability = (callback) => {
    console.log("Mengecek ketersediaan...");

    setTimeout(() => {
        const isAvailable = true;
        callback(isAvailable);
    }, 1000);
};

const reserveBook = (isAvailable, callback) => {
    if (isAvailable) {
        console.log("Buku direservasi!");
        setTimeout(() => {
            callback("Reservasi dikonfirmasi!");
        }, 2000);
    } else {
        console.log("Buku tidak tersedia.");
    }
};

const library = (isAvailable) => {
    reserveBook(isAvailable, (message) => {
        console.log(message);
    });
};

checkAvailability(library);
