/**
 * author : Sudeera Madushan
 * date : 1/13/2024
 * project : food-delivery-system
 */
import React, { useState, ChangeEvent, DragEvent } from 'react';

const ImagePicker: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();

        const file = e.dataTransfer.files[0];

        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = () => {
                setSelectedImage(reader.result as string);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];

        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = () => {
                setSelectedImage(reader.result as string);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setSelectedImage(null);
    };

    return (
        <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="border-2 border-dashed border-gray-300 rounded p-4 text-center cursor-pointer"
        >
            {selectedImage ? (
                <div>
                    <img
                        src={selectedImage}
                        alt="Selected"
                        className="max-w-full max-h-300px rounded"
                    />
                    <p className="mt-2">Selected Image</p>
                    <button
                        onClick={handleRemoveImage}
                        className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Remove Image
                    </button>
                </div>
            ) : (
                <div>
                    <p>Drag and drop or choose an image</p>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileInputChange}
                        className="hidden"
                        id="fileInput"
                    />
                    <label
                        htmlFor="fileInput"
                        className="cursor-pointer text-blue-500"
                    >
                        Choose File
                    </label>
                </div>
            )}
        </div>
    );
};

export default ImagePicker;
