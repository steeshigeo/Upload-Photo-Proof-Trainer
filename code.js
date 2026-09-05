const FOLDER_INDUK_ID = "1lY6p-26qiB3L_czDBgPfTE9nyUpGNC-r"; 

function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Dashboard Foto Aktivitas M121')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function uploadFileToDrive(data) {
  try {
    const parentFolder = DriveApp.getFolderById(FOLDER_INDUK_ID);
    
    // Cari sub-folder di dalam folder induk sesuai pilihan aktivitas
    const subFolders = parentFolder.getFoldersByName(data.tujuan);
    
    let targetFolder;
    if (subFolders.hasNext()) {
      targetFolder = subFolders.next(); // Masuk ke folder yang ada
    } else {
      targetFolder = parentFolder.createFolder(data.tujuan); // Buat folder baru jika belum ada
    }
    
    // Simpan file foto
    const bytes = Utilities.base64Decode(data.fileData.split(',')[1]);
    const blob = Utilities.newBlob(bytes, data.mimeType, `${data.namaStaff}_${data.tujuan}_${new Date().getTime()}.jpg`);
    const file = targetFolder.createFile(blob);
    
    return { success: true, url: file.getUrl() };
  } catch (error) {
    return { success: false, error: error.toString() };
  }
}