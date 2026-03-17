from models import SavingsAccount, CheckingAccount

def main():
    savings = SavingsAccount("1001", "John Doe", 1000, 0.05)
    checking = CheckingAccount("2002", "Jane Smith", 500, 200)

    accounts = [savings, checking]

    for account in accounts:
        print(account)
        print(account.deposit(100))
        
        if isinstance(account, SavingsAccount):
            print(account.apply_interest())
        
        print("-" * 30)

if __name__ == "__main__":
    main()