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

// class GameCharacter {
//   name: string;
//   health: number;
//   level: number;
//   experience: number;

//   constructor(name: string, health: number, level: number, experience: number) {
//     this.name = name;
//     this.health = health;
//     this.level = level;
//     this.experience = experience;
//   }

//   attack(): void {
//     console.log(`${this.name} атакує!!`);
//   }

//   takeDamage(amount: number): void {
//     this.health -= amount;

//     console.log(`${this.name} отримав ${amount} одиниць шкоди!!`);

//     if (this.health === 0) {
//       console.log(`${this.name} переможений!`);
//     }
//   }

//   showStatus(): void {
//     console.log("Характеристики персонажа");
//     console.log(`Ім'я: ${this.name}`);
//     console.log(`Здоров'я: ${this.health}`);
//     console.log(`Рівень: ${this.level}`);
//     console.log(`Досвід: ${this.experience}`);
//   }
// }

// const hero = new GameCharacter("Knight", 100, 1, 0);

// hero.showStatus();

// hero.attack();

// hero.takeDamage(30);

// hero.showStatus();

// class BankAccount {
//   public owner: string;
//   private balance: number;

//   constructor(owner: string, balance: number) {
//     this.owner = owner;

//     if (balance < 0) {
//       throw new Error("Баланс не може бути від'ємним!!");
//     }

//     this.balance = balance;
//   }

//   get getBalance(): number {
//     return this.balance;
//   }

//   deposit(amount: number): void {
//     if (amount <= 0) {
//       console.log("Не можна поповнювати рахунок від'ємною сумою або нулем!!");
//       return;
//     }

//     this.balance += amount;
//     console.log(`Рахунок поповнено на ${amount} грн`);
//   }

//   withdraw(amount: number): void {
//     if (amount <= 0) {
//       console.log("Не можна знімати від'ємну суму або нуль!!");
//       return;
//     }

//     if (amount > this.balance) {
//       console.log("Недостатньо коштів на рахунку!!");
//       return;
//     }

//     this.balance -= amount;
//     console.log(`Знято ${amount} грн`);
//   }
// }

// const account = new BankAccount("Іван", 1000);

// account.deposit(500);
// account.withdraw(200);

// console.log("Баланс:", account.getBalance);

// class Character {
//   name: string;
//   behavior: string;
//   health: number;

//   constructor(name: string, behavior: string, health: number) {
//     this.name = name;
//     this.behavior = behavior;
//     this.health = health;
//   }

//   attack() {
//     console.log(`${this.name} атакує!`);
//   }

//   showStatus() {
//     console.log(`Ім'я: ${this.name}`);
//     console.log(`Характер: ${this.behavior}`);
//     console.log(`Здоров'я: ${this.health}`);
//   }
// }

// class Warrior extends Character {
//   useSword() {
//     console.log(`${this.name} використав меч!!`);
//   }

//   override attack() {
//     console.log(`${this.name} атакує мечем!!`);
//   }
// }

// class Wizard extends Character {
//   tellSpell() {
//     console.log(`${this.name} промовив закляття!!`);
//   }

//   override attack() {
//     console.log(`${this.name} атакує магією!!`);
//   }
// }

// const warrior = new Warrior("Артур", "Сміливий", 100);

// const wizard = new Wizard("Мерлін", "Мудрий", 80);

// warrior.showStatus();
// warrior.attack();
// warrior.useSword();

// wizard.showStatus();
// wizard.attack();
// wizard.tellSpell();

class Key {
  signature: number;

  constructor() {
    this.signature = Math.floor(Math.random() * 1000);
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  door: boolean = false;
  key: Key;
  tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("Людина зайшла до будинку!!");
    } else {
      console.log("Двері зачинені!! Увійти неможливо");
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Правильний ключ!! Двері відчинено.");
    } else {
      this.door = false;
      console.log("Неправильний ключ!! Двері залишаються зачиненими.");
    }
  }
}

const houseKey = new Key();

const myHouse = new MyHouse(houseKey);

const person = new Person(houseKey);

const stranger = new Person(new Key());

myHouse.comeIn(person);

myHouse.openDoor(person.getKey());

myHouse.comeIn(person);

myHouse.openDoor(stranger.getKey());

myHouse.comeIn(stranger);
