import { useEffect, useState } from 'react';

const SetImage: React.FC = () => {
  const saveImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      // convert file to base64 String
      const base64String = reader.result
        ?.toString()
        .replace("data:", "")
        .replace(/^.+,/, "");
      // store file
      try {
        localStorage.setItem("pic", base64String);
      } catch (e) {
        console.log(e);
      }
      document.getElementById(
        "display"
      ).src = `data:image/png;base64,${base64String}`!;
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (localStorage) {
      const base64String = localStorage.getItem("pic");
      document.getElementById(
        "display"
      ).src = `data:image/png;base64,${base64String}`!;
    }
  });

  return (
    <div>
      <input type="file" name="" id="file" onChange={saveImage}/>
      <img src="" id='display' width='200px' alt="" />
    </div>
  )
}

export default SetImage;