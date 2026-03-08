type Account = {
  accountId: string;
  name: string;
  balance: string;
};

type AccountBalancesProps = {
  accounts: Array<Account>;
  isLoading: boolean;
  error: string | null;
};

export type { Account, AccountBalancesProps };
