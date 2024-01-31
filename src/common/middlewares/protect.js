import { authenticate } from "../utils/authenticate.js";
import { catchAsync } from "../utils/errorHandler.js";
import { setCookie } from "../utils/helper.js";

export const protect = catchAsync(
  async (req, res, next) => {
    const { accessToken, refreshToken } = req.cookies;
    const { currentUser, newAccessToken } = await authenticate(
      accessToken,
      refreshToken,
    );
    if (newAccessToken) {
      setCookie(res, "accessToken", newAccessToken, { maxAge: 15 * 60 * 1000 });
      console.log(newAccessToken, "cookie was created");
    }
    if (currentUser) {
      req.user = currentUser;
    }
    next();
  },
);
