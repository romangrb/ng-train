export class CounterService {
  private activeToInactiveCount = 0;
  private inactiveToActiveCount = 0;

  logActiveUser(): void {
    console.info(this.activeToInactiveCount++);
  }

  logInactiveUser(): void {
    console.info(this.inactiveToActiveCount++);
  }
}
