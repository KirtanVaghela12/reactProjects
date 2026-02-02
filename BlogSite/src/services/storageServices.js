import authService from "./authServices";

class StorageService {
  async uploadFile(file) {
    const user = authService.getCurrentUser();
    if (!user) throw new Error("User not logged in");

    const files = JSON.parse(localStorage.getItem("files")) || [];

    const fileObj = {
      id: crypto.randomUUID(),
      name: file.name,
      url: URL.createObjectURL(file),
      ownerId: user.id,
    };

    files.push(fileObj);
    localStorage.setItem("files", JSON.stringify(files));

    return fileObj;
  }

  async deleteFile(fileId) {
    let files = JSON.parse(localStorage.getItem("files")) || [];
    files = files.filter((file) => file.id !== fileId);
    localStorage.setItem("files", JSON.stringify(files));
    return true;
  }

  async getFilePreviewURL(fileId) {
    const files = JSON.parse(localStorage.getItem("files")) || [];
    const file = files.find((f) => f.id === fileId);
    return file ? file.url : null;
  }
}

const storageService = new StorageService();
export default storageService;


















