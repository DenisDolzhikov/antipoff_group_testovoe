import { useEffect, useState } from 'react';

interface Props {
  
}

const SetImage: React.FC = () => {

  const handleSaveImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result
        ?.toString()
        .replace("data:", "")
        .replace(/^.+,/, "");

      try {
        localStorage.setItem("pic", base64String);
      } catch (e) {
        console.log(e);
      }
      document.getElementById("display").src =
        `data:image/png;base64,${base64String}`!;
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (localStorage) {
      const base64String = localStorage.getItem("pic");
      document.getElementById("display").src =
        `data:image/png;base64,${base64String}`!;
    }
  });

  return (
    <div className="avatar-container">
      <img
        className="avatar-img"
        id="display"
        alt="avatar"
        src="https://images.unsplash.com/photo-1718376282529-65d511527225?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="wrapper">
        <input type="file" name="" id="file" onChange={handleSaveImage} />
      </div>
    </div>
  );
};

export default SetImage;