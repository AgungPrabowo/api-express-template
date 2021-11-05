const getOffset = (page, limit) => page * limit - limit;

const getNextPage = (page, limit, total) => {
  if (total / limit > page) {
    return page + 1;
  }
  return 0;
};

const getPreviousPage = (page) => {
  if (page <= 1) {
    return 0;
  }
  return page - 1;
};

module.exports = async (model, pageSize, pageLimit, option) => {
  try {
    const limit = parseInt(pageLimit, 10) || 10;
    const page = parseInt(pageSize, 10) || 1;

    // create an options object
    const options = {
      offset: getOffset(page, limit),
      limit,
      ...option,
    };

    // take in the model, take in the options
    const { rows, count } = await model.findAndCountAll(options);
    const getCount = typeof count === "object" ? count.length : count;

    return {
      current_page: page,
      data: rows,
      last_page: Math.ceil(getCount / limit),
      limit,
      next_page: getNextPage(page, limit, getCount),
      prev_page: getPreviousPage(page),
      total: getCount,
    };
  } catch (error) {
    return null;
  }
};
