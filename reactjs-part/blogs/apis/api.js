export default {
    getAboutData: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ email: "test@gmail.com", address: "HN" });
            }, 500);
        });
    },
    getPageInfo: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    author: "ReactJS2008",
                    phone: "09xxxxxxx",
                });
            }, 1000);
        });
    },
};
