import { useEffect, useState } from 'react';

import { Account } from '../types';

const DATA = [
  {
    accountId: '1',
    name: 'C6 Bank',
    balance: 'R$ 0,00',
  },
  {
    accountId: '2',
    name: 'Bradesco',
    balance: 'R$ 0,00',
  },
  {
    accountId: '3',
    name: 'Itaú',
    balance: 'R$ 0,00',
  },
  {
    accountId: '4',
    name: 'PagueBank',
    balance: 'R$ 0,00',
  },
  {
    accountId: '5',
    name: 'Nubank',
    balance: 'R$ 0,00',
  },
  {
    accountId: '6',
    name: 'Inter',
    balance: 'R$ 0,00',
  },
];

export const useAccountBalances = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await Promise.resolve(DATA);
        setAccounts(response);
      } catch (error) {
        setError('Erro ao buscar as contas');
      } finally {
        setIsLoading(false);
      }
    };
    fetchAccounts();
  }, []);

  return { accounts, isLoading, error };
};
