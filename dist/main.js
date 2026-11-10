"use strict";
// class Character {
//   public name: string;
//   protected behavior: string;
//   private _health: number;
//   constructor(name: string, behavior: string, health: number) {
//     this.name = name;
//     this.behavior = behavior;
//     this._health = health;
//   }
//   get health(): number {
//     return this._health;
//   }
//   set health(value: number) {
//     if (value < 0) {
//       this._health = 0;
//     } else if (value > 100) {
//       this._health = 100;
//     } else {
//       this._health = value;
//     }
//   }
//   attack(): void {
//     console.log(`персонаж атакує ${this.name}`);
//   }
// }
// const c1 = new Character("Pavlo", "atac", 1000);
// c1.attack();
class GameCharacter {
    constructor(name, health, level, experience) {
        this.name = name;
        this.health = health;
        this.level = level;
        this.experience = experience;
    }
    attack() {
        console.log(`${this.name} атакує!!`);
    }
    takeDamage(amount) {
        this.health -= amount;
        console.log(`${this.name} отримав ${amount} одиниць шкоди!!`);
        if (this.health === 0) {
            console.log(`${this.name} переможений!`);
        }
    }
    showStatus() {
        console.log("Характеристики персонажа");
        console.log(`Ім'я: ${this.name}`);
        console.log(`Здоров'я: ${this.health}`);
        console.log(`Рівень: ${this.level}`);
        console.log(`Досвід: ${this.experience}`);
    }
}
const hero = new GameCharacter("Knight", 100, 1, 0);
hero.showStatus();
hero.attack();
hero.takeDamage(30);
hero.showStatus();
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        if (balance < 0) {
            throw new Error("Баланс не може бути від'ємним!!");
        }
        this.balance = balance;
    }
    get getBalance() {
        return this.balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("Не можна поповнювати рахунок від'ємною сумою або нулем!!");
            return;
        }
        this.balance += amount;
        console.log(`Рахунок поповнено на ${amount} грн`);
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Не можна знімати від'ємну суму або нуль!!");
            return;
        }
        if (amount > this.balance) {
            console.log("Недостатньо коштів на рахунку!!");
            return;
        }
        this.balance -= amount;
        console.log(`Знято ${amount} грн`);
    }
}
const account = new BankAccount("Іван", 1000);
account.deposit(500);
account.withdraw(200);
console.log("Баланс:", account.getBalance);
class Character {
    constructor(name, behavior, health) {
        this.name = name;
        this.behavior = behavior;
        this.health = health;
    }
    attack() {
        console.log(`${this.name} атакує!`);
    }
    showStatus() {
        console.log(`Ім'я: ${this.name}`);
        console.log(`Характер: ${this.behavior}`);
        console.log(`Здоров'я: ${this.health}`);
    }
}
class Warrior extends Character {
    useSword() {
        console.log(`${this.name} використав меч!!`);
    }
    attack() {
        console.log(`${this.name} атакує мечем!!`);
    }
}
class Wizard extends Character {
    tellSpell() {
        console.log(`${this.name} промовив закляття!!`);
    }
    attack() {
        console.log(`${this.name} атакує магією!!`);
    }
}
const warrior = new Warrior("Артур", "Сміливий", 100);
const wizard = new Wizard("Мерлін", "Мудрий", 80);
warrior.showStatus();
warrior.attack();
warrior.useSword();
wizard.showStatus();
wizard.attack();
wizard.tellSpell();
//# sourceMappingURL=main.js.map