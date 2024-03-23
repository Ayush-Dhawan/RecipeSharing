

export default async function compressImage(dataUrl: any): Promise<string> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = dataUrl;
        img.onload = () => {
            const fileType = img.src.split(';')[0].split('/')[1]; // Get the file type
            const allowedTypes = ['jpg', 'jpeg', 'png'];

            if (!allowedTypes.includes(fileType.toLowerCase())) {
                reject(new Error('Only JPG, JPEG, or PNG images are allowed.'));
                return;
            }

            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const maxWidth = 800; // Adjust as needed
            const maxHeight = 600; // Adjust as needed

            let width = img.width;
            let height = img.height;

            if (width > height) {
                if (width > maxWidth) {
                    height *= maxWidth / width;
                    width = maxWidth;
                }
            } else {
                if (height > maxHeight) {
                    width *= maxHeight / height;
                    height = maxHeight;
                }
            }

            canvas.width = width;
            canvas.height = height;

            ctx?.drawImage(img, 0, 0, width, height);

            canvas.toBlob((blob) => {
                const reader = new FileReader();
                reader.readAsDataURL(blob!);
                reader.onloadend = () => {
                    const base64data = reader.result as string;
                    resolve(base64data);
                };
            }, 'image/jpeg', 0.6); // Adjust quality (0.7 is 70% quality)
        };
        img.onerror = reject;
    });
}