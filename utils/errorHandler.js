var fd = require("lodash/flattenDeep");

export const ErrorHandler = (error) => {
   if (error.response?.data && Object.keys(error.response.data).length > 0) {
      const values = Object.values(error.response?.data);
      return fd(Object.values(values)).join("\n");
   } else if (error.message) {
      return error.message;
   } else {
      return "";
   }
};