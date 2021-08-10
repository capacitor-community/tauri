#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri_capacitor_plugin::Capacitor;

fn main() {
  tauri::Builder::default()
    .plugin(Capacitor::default())
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
