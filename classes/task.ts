abstract class Logger {
  abstract log(message: string): void;

  printDate() {
    console.log(new Date().toLocaleDateString());
  }
}

class RealLogger extends Logger {
  log(message: string): void {
    console.log(message);
  }

  logWithDate(message) {
    this.log(message);
    this.printDate();
  }
}
