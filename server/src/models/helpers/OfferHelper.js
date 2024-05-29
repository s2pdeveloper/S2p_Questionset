exports.getOfferAttributes = (extra) => {
    return {
      _id: 1,
      id: '_id',
      title: 1,
      startDate: 1,
      endDate: 1,
      description: 1,
      status: 1,
      image: 1,
      ...extra,
    };
  };