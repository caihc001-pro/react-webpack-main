export function loadImg(url: string) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      console.log("on load");
      resolve(img);
    };
    img.onerror = () => {
      reject("could not load");
    };
    img.src = url;
  });
}
