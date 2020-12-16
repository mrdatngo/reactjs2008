export default {
    getAboutData: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ email: "test@gmail.com", address: "HN" });
            }, 500);
        });
    },
};
