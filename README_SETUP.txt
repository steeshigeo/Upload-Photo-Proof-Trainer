# Dashboard Foto Aktivitas M121 — v3

Fitur:
- Mobile-first modern UI
- Appearance: mengikuti perangkat (default), Light, atau Dark
- Pilihan appearance disimpan di browser
- Tanggal lengkap: hari, tanggal, bulan, tahun
- Pilihan 5 folder aktivitas:
  Open Studio, Roleplay, Training, Try On Aksara, Try On Samudra
- Daftar staff terbaru
- Upload foto langsung ke subfolder Google Drive yang dipilih
- Keterangan opsional
- Maksimal 10 MB per foto

## Google Drive
Struktur:
M121 Digimap TP3 Training/
  Open Studio/
  Roleplay/
  Training/
  Try On Aksara/
  Try On Samudra/

Isi ROOT_FOLDER_ID di Code.gs dengan ID folder induk.

Deploy Apps Script sebagai Web App:
Execute as: Me
Who has access: Anyone with the link
