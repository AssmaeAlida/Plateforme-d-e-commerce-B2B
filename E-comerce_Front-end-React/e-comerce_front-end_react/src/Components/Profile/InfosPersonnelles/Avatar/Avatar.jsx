import React from "react";
import  { useRef , useState } from 'react';
import "./Avatar.css"

const Avatar = ({  alt }) => {
  const [imageUploader, setImageUploader] = useState("./images/rectangle-4777.png");
  const fileInput = useRef(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUploader(url);
      console.log(url);
      sessionStorage.setItem('imageUploader', imageUploader);
      return 1 ;
    }
  }

  return (
    <div className="img-profile">
      <img
        src={imageUploader}
        alt={alt}
        style={{
          width: "90px",
          height: "90px",
          flexShrink: 0,
          borderRadius: "100px",
        }}
      />
      <input 
        type="file" 
        accept="image/*" 
        style={{ display: 'none' }} 
        ref={fileInput} 
        onChange={handleFileChange}
      />
      <div className="icon-camera">
        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="30" viewBox="20 0 2 24" fill="none"  onClick={() => fileInput.current.click()}>
          <circle cx="12" cy="12" r="11.5" fill="white" stroke="#E7E7E7"/>
          <svg xmlns="http://www.w3.org/2000/svg" x="5" y="4" width="13" height="14" style={{margin:"3px"}} viewBox="0 0 10 9" fill="none">
            <path d="M1 1H2.5L3.20711 0.292893C3.39464 0.105356 3.649 0 3.91421 0H6.08579C6.351 0 6.60536 0.105357 6.79289 0.292893L7.5 1H9C9.26522 1 9.51957 1.10536 9.70711 1.29289C9.89464 1.48043 10 1.73478 10 2V8C10 8.26522 9.89464 8.51957 9.70711 8.70711C9.51957 8.89464 9.26522 9 9 9H1C0.734784 9 0.48043 8.89464 0.292893 8.70711C0.105357 8.51957 0 8.26522 0 8V2C0 1.73478 0.105357 1.48043 0.292893 1.29289C0.48043 1.10536 0.734784 1 1 1ZM5 2.5C4.33696 2.5 3.70107 2.76339 3.23223 3.23223C2.76339 3.70107 2.5 4.33696 2.5 5C2.5 5.66304 2.76339 6.29893 3.23223 6.76777C3.70107 7.23661 4.33696 7.5 5 7.5C5.66304 7.5 6.29893 7.23661 6.76777 6.76777C7.23661 6.29893 7.5 5.66304 7.5 5C7.5 4.33696 7.23661 3.70107 6.76777 3.23223C6.29893 2.76339 5.66304 2.5 5 2.5ZM5 3.5C5.39782 3.5 5.77936 3.65804 6.06066 3.93934C6.34196 4.22064 6.5 4.60218 6.5 5C6.5 5.39782 6.34196 5.77936 6.06066 6.06066C5.77936 6.34196 5.39782 6.5 5 6.5C4.60218 6.5 4.22064 6.34196 3.93934 6.06066C3.65804 5.77936 3.5 5.39782 3.5 5C3.5 4.60218 3.65804 4.22064 3.93934 3.93934C4.22064 3.65804 4.60218 3.5 5 3.5Z" fill="#FD6C6B"/>
          </svg >
        </svg>
      </div>
    </div>
  );
};

export default Avatar;