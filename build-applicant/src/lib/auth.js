import jwtDecode from "jwt-decode";

export const checkToken = (params) => {
  if (!params) {
    return window.location.replace("http://recruitment.sbi.co.id");
  } else {
    const token = jwtDecode(params);

    const roles = token.roles_id;
    if (roles === 3) {
      return window.location.replace("http://recruitment.sbi.co.id/home-user");
    }
  }
};
