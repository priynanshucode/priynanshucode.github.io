// Give native build workers time to close before vinext exits on Windows.
if (process.platform === 'win32') {
  const exit = process.exit.bind(process);
  process.exit = (code) => { setTimeout(() => exit(code), 500); };
}
