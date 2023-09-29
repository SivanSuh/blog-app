import React from "react";
import FileUploaderProp from "./props";

const FileUpload: React.FC<FileUploaderProp> = ({
  title = "Resim Yükleyiniz",
  id,
  name,
  register,
  setSelectedFile,
}) => {
  const handleFileChange = (e: any) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <>
      <input
        type="file"
        id={id}
        {...register(name)}
        name={name}
        placeholder={title}
        onChange={handleFileChange}
      />
    </>
  );
};

export default FileUpload;
