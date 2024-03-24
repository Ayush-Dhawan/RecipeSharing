import React from 'react';
import toast from 'react-hot-toast';

function ImageInput({state, setState}: {state: string, setState: React.Dispatch<React.SetStateAction<string>>}) {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const allowedExtensions = ['jpg', 'jpeg', 'png'];
    const extension = file.name.split('.').pop()?.toLowerCase();

    if (!extension || !allowedExtensions.includes(extension)) {
      toast.error('Invalid file format. Please upload a JPG or PNG file.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const dataURL = reader.result as string;
      // Convert the data URL to a shorter Base64-encoded string
      const base64String = dataURL.split(',')[1];
      setState(base64String); // Set state with the shortened Base64 string
    };
    reader.onerror = (error) => {
      console.error('Error converting image to data URL:', error);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
    </div>
  );
}

export default ImageInput;
