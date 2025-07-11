const urlVersioniong = (version) => (req, res, next) => {
  if (req.path.startsWith(`/api/${version}`)) {
    next();
  } else {
    res.status(404).json({
      success: false,
      message: "Api Version is not supported",
    });
  }
};

const headerVersioning = (version) => (req, res, next) => {
  if (req.get("Accept-Version") === version) {
    next();
  } else {
    res.status(404).json({
      success: false,
      message: "Header version is not supported",
    });
  }
};

const contentTypeVersioning = (version) => (req, res, next) => {
  const contentType = req.get("Content-Type");
  if (
    contentType &&
    contentType.includes(`application/vnd.api.${version}+json`)
  ) {
    next();
  } else {
    res.status(404).json({
      success: false,
      message: "Content type Version is not supported",
    });
  }
};

module.exports = {
  contentTypeVersioning,
  headerVersioning,
  urlVersioniong,
};
