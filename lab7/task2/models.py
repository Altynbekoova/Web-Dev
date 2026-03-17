class Account:
    def __init__(self, account_number, owner, balance):
        self.account_number = account_number
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return f"Deposit of {amount} successful. New balance: {self.balance}"

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            return f"Withdrew {amount}. Remaining: {self.balance}"
        return "Insufficient funds"

    def __str__(self):
        return f"Account #{self.account_number} ({self.owner}): {self.balance} USD"

class SavingsAccount(Account):
    def __init__(self, account_number, owner, balance, interest_rate):
        super().__init__(account_number, owner, balance)
        self.interest_rate = interest_rate

    def apply_interest(self):
        self.balance += self.balance * self.interest_rate
        return f"Interest applied. New balance: {self.balance:.2f}"

class CheckingAccount(Account):
    def __init__(self, account_number, owner, balance, overdraft_limit):
        super().__init__(account_number, owner, balance)
        self.overdraft_limit = overdraft_limit

    # Overriding the parent method
    def withdraw(self, amount):
        if amount <= self.balance + self.overdraft_limit:
            self.balance -= amount
            return f"Withdrew {amount} with overdraft. Remaining: {self.balance}"
        return "Overdraft limit exceeded"