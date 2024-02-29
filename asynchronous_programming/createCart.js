function createCart(cart) {
    const p = new promise(function (Resolve, reject) {

        if (!validateCart(cart)) {
            reject();
        }

        const orderId = "12345";
        if (orderId) {
            Resolve(orderId);
        }
    });
    return p;
}
