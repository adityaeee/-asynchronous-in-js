const bookFlight = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Tiket pesawat dipesan");
        }, 1000);
    });
};

const bookHotel = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hotel dipesan");
        }, 2000);
    });
};

const bookCar = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Mobil disewa");
        }, 3000);
    });
};

const bookVacation = async () => {
    try {
        const orderFlight = await bookFlight();
        console.log(orderFlight);

        const orderHotel = await bookHotel();
        console.log(orderHotel);

        const orderCar = await bookCar();
        console.log(orderCar);
    } catch (error) {
        console.log("🚀 Gagal liburan yeey...", error);
    } finally {
        console.log("🚀 Gak jadi gagal liburan...");
    }
};

bookVacation();
