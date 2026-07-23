
export const authorize = (...roles) => {
  const middleware = (req, res, next) => {
    if(!roles.includes(req.user.role)) {
      res.json({message: "Access Denied"});
      return ;
    }

    next();
  }

  return middleware;
}