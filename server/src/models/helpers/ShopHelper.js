
exports.getShopUserAttributes = (extra) => {
   return {
        _id: 1,
        id: '_id',
        shopName: 1,
        UPI: 1,
        aboutUs: 1,
        galleryImages: 1,
        address: 1,
        image: 1,
        bannerImages: 1,
        businessTypeId: 1,
        review: 1,
        links: 1,
        schedule: 1,
        avgRating: 1,
        ...extra,
    };
};