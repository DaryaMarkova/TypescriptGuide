/* Паттерн "мост": суть паттерна в том, что разные классы наследуют какой-то общий интерфейс */
interface IProvider {
  sendMessage(message: string);
}

class TelegramProvider implements IProvider {
  sendMessage(message: string) {
    throw new Error("Method not implemented.");
  }
}

class WhatsUpProvider implements IProvider {
  sendMessage(message: string) {
    throw new Error("Method not implemented.");
  }
}

class NotificationSender {
  constructor(private provider: IProvider) {}

  send() {
    this.provider.sendMessage("connect");
    this.provider.sendMessage("");
  }
}

class DelayNotificationSender extends NotificationSender {
  constructor(provider: IProvider) {
    super(provider);
  }

  sendDelayed() {}
}

const sender = new NotificationSender(new TelegramProvider());
sender.send();

const sender2 = new NotificationSender(new WhatsUpProvider());
sender2.send();
