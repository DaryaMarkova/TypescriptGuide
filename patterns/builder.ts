interface IResolution {
  width: number;
  height: number;
}

enum ImageFormat {
  Png = "png",
  Jpeg = "jpeg",
}

interface IImageConversion extends IResolution {
  format: ImageFormat;
}

class ImageBuilder {
  private formats: ImageFormat;

  addPng() {
    // ...
    return this;
  }

  addJpeg() {
    // ...
    return this;
  }

  addResolution() {
    // ...
    return this;
  }
}
