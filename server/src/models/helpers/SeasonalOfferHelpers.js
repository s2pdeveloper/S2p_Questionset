
exports.getSeasonalOfferAttributes = (extra) => {
    return {
      id: '$_id',
      _id: 1,
      heading: 1,
      startDate: 1,
      endDate: 1,
      media: 1,
      status: 1,
      ...extra,
    };
};