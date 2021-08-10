use tauri::{plugin::Plugin, Invoke, Runtime};

// the plugin custom command handlers if you choose to extend the API.
#[tauri::command]
// this will be accessible with `invoke('plugin:awesome|initialize')`.
// where `awesome` is the plugin name.
fn initialize() {}

#[tauri::command]
// this will be accessible with `invoke('plugin:awesome|do_something')`.
fn do_something() {}


pub struct Capacitor<R: Runtime> {
  invoke_handler: Box<dyn Fn(Invoke<R>) + Send + Sync>,
  // plugin state, configuration fields
}

impl<R: Runtime> Default for Capacitor<R> {
  fn default() -> Self {
    Self {
        invoke_handler: Box::new(tauri::generate_handler![initialize, do_something]),
    }
  }
}

impl<R: Runtime> Plugin<R> for Capacitor<R> {
  /// The plugin name. Must be defined and used on the `invoke` calls.
  fn name(&self) -> &'static str {
    "capacitor"
  }

  /// The JS script to evaluate on initialization.
  /// Useful when your plugin is accessible through `window`
  /// or needs to perform a JS task on app initialization
  /// e.g. "window.awesomePlugin = { ... the plugin interface }"
  fn initialization_script(&self) -> Option<String> {
    let opt: Option<String> = Some(String::from("window.CapacitorCustomPlatform = {name: 'tauri', plugins: {}}"));
    opt
  }

  /// Extend the invoke handler.
  fn extend_api(&mut self, invoke: Invoke<R>) {
    (self.invoke_handler)(invoke)
  }
}