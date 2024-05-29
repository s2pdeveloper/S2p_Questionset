exports.getBusinessTypeAttributes = (extra) => {
    return {
        _id: 1,
        id: '_id',
        name: 1,
        description: 1,
        image: 1,
        status: 1,
        ...extra,
    };
};