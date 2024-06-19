const placeOrder = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Pesanan dikonfirmasi...");
        }, 1000);
    });
};

const processPayment = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Pembayaran diproses...");
        }, 2000);
    });
};

const shipBook = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Buku dikirim...");
        }, 3000);
    });
};

placeOrder()
    .then((message) => {
        console.log(message);
        return processPayment();
    })
    .then((message) => {
        console.log(message);
        return shipBook();
    })
    .then((message) => {
        console.log(message);
    })
    .catch((err) => {
        console.log("gak jadi pesan buku", err);
    })
    .finally(() => {
        setTimeout(() => {
            console.log("proses pemesanan buku selesai:)");
        }, 2000);
    });
