import multer from "multer";

const pdfFilter = (req, file, cb) => {
  if (
    file.mimetype.startsWith("application/pdf") ||
    file.mimetype.startsWith("image/png") ||
    file.mimetype.startsWith("image/jpg") ||
    file.mimetype.startsWith("image/jpeg")
  ) {
    cb(null, true);
  } else {
    return cb(new Error("Please upload only pdf, png, jpg, or jpeg."));
  }
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public");
  },
  filename: (req, file, callback) => {
    callback(null, file.fieldname + "-" + Date.now() + "-" + file.originalname);
  },
});

export const Upload = multer({
  storage: storage,
  fileFilter: pdfFilter,
  limits: { fileSize: 1097152 },
});

const storageUser = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads");
  },
  filename: (req, file, callback) => {
    callback(null, file.fieldname + "-" + Date.now() + "-" + file.originalname);
  },
});

export const UploadUser = multer({
  storage: storageUser,
  fileFilter: pdfFilter,
  limits: { fileSize: 1097152 },
});

const csvFilter = (req, file, cb) => {
  if (
    file.mimetype.startsWith("text/csv") || 
    file.mimetype.startsWith("text/xlsx") || 
    file.mimetype.startsWith("application/vnd.ms-excel")
  ) {
    cb(null, true);
  } else {
    return cb(new Error("Please upload only csv file."));
  }
};

const storageImport = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads");
  },
  filename: (req, file, callback) => {
    callback(null, file.fieldname + "-" + Date.now() + "-" + file.originalname);
  },
});

export const ImportData = multer({
  storage: storageImport,
  fileFilter: csvFilter,
  limits: { fileSize: 1097152 },
});
